import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

const SharedLayout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
