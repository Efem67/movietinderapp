import React from "react";
import logo from "../assets/images/logo.png";

function Navbar(): JSX.Element {
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-2 p-3">
        <img src={logo} alt="logo" className="w-14 h-14 md:w-16 md:h-16" />
        <h1 className="font-quicksand text-2xl sm:text-3xl">MovieTinder</h1>
      </div>
    </>
  );
}

export default Navbar;
