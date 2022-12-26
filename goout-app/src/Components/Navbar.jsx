import React from "react";
import logo from "../Images/logo.png";
import cta from "../Images/cta button.png";

const Navbar = () => {
  const navList = [
    {
      list: "Home",
    },
    {
      list: "Flight",
    },
    {
      list: "Hotel",
    },
    {
      list: "Travel Package",
    },
    {
      list: "Contact Us",
    },
  ];
  return (
    <div className="navbar mt-4 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="">
        <ul className="nav">
          {navList.map((item) => {
            return (
              <li className="nav-item">
                <a className="nav-link">{item.list}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <img src={cta} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
