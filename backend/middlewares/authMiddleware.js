const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ status: "error", message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "Unauthorized: User not found" });
    }

    req.user = user;

    next();
  } catch (err) {
    console.error(err);
    res
      .status(401)
      .json({ status: "error", message: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;
