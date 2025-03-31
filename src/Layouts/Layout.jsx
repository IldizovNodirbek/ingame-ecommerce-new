import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Main/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Barcha sahifalar shu yerda almashinadi */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
