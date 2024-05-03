import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import "./layout.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
