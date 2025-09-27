import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ProductListing from "./pages/ProductListing";
import PublicLayout from "./layouts/PublicLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import Orders from "./pages/UserDashboard/Orders";
import Wishlists from "./pages/UserDashboard/Wishlists";
import ManageAddress from "./pages/UserDashboard/ManageAddress";
import AddAddress from "./pages/UserDashboard/AddAddress";
import EditAddress from "./pages/UserDashboard/EditAddress";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/product-details"
          element={
            <PublicLayout>
              <ProductDetails />
            </PublicLayout>
          }
        />
        <Route
          path="/product-listing"
          element={
            <PublicLayout>
              <ProductListing />
            </PublicLayout>
          }
        />

        <Route
          path="/account/*"
          element={
            <UserDashboardLayout>
              <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/wishlists" element={<Wishlists />} />
                <Route path="/manage-address" element={<ManageAddress />} />
                <Route path="/add-address" element={<AddAddress />} />
                <Route path="/edit-address" element={<EditAddress />} />
              </Routes>
            </UserDashboardLayout>
          }
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
