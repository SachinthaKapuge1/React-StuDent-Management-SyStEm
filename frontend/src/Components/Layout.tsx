import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
      <Outlet />
    </>
  );
};

export default Layout;
