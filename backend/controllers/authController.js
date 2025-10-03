const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const signupHandler = async (req, res) => {
  try {
    const { fullName, phoneNumber, password, email, loginType } = req.body;

    if (!fullName || !phoneNumber || !password || !email)
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required!" });

    if (phoneNumber.length != 10)
      return res
        .status(400)
        .json({ status: "error", message: "Invalid phone number!" });

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res
        .status(400)
        .json({ status: "error", message: "Email is already registered!" });

    const user = await User.create({
      fullName,
      email,
      password,
      phoneNumber,
      loginType: loginType || "email",
    });

    const token = user.getSignedJwtToken();

    return res.status(201).json({
      status: "success",
      message: "Signup successfully!",
      userDetails: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        loginType: user.loginType,
      },
      token,
    });
  } catch (e) {
    console.log("Signup error: ", e);
    return res
      .status(500)
      .json({ status: "error", message: "Server Error", error: e.message });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required!" });
    }
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(401)
        .json({ status: "error", message: "User not found with this email!" });

    const passIsMatch = await bcrypt.compare(password, user.password);

    if (!passIsMatch)
      return res
        .status(401)
        .json({ status: "error", message: "Invalid password!" });

    const token = user.getSignedJwtToken();

    return res.status(201).json({
      status: "success",
      message: "Login  successfully!",
      userDetails: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        loginType: user.loginType,
      },
      token,
    });
  } catch (e) {
    console.log("Login error: ", e);
    return res
      .status(500)
      .json({ status: "error", message: "Server Error", error: e.message });
  }
};

module.exports = { signupHandler, loginHandler };
