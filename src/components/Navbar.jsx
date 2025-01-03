import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div className="flex justify-between h-[30vh]">
      <Logo />
      <Nav />
      <Icons />
    </div>
  );
};

export default Navbar;
