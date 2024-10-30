import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log("opm");
  };
  return (
    <div className="flex items-center justify-around h-16  fixed w-full bg-[#161513] z-50">
      <div className="flex relative  items-center ">
        <img className=" w-20 " src={logo} alt="" />
        <h1 className="text-4xl absolute  ">Abhi</h1>
      </div>
      <img
        className={`sm:hidden  fixed right-10 w-5 ${open ? "block" : "hidden"}`}
        onClick={toggle}
        src={menu_open}
        alt=""
      />
      <img
        className={`sm:hidden fixed right-10  ${open ? "hidden" : "block"} `}
        onClick={toggle}
        src={menu_close}
        alt=""
      />
      <ul
        className={` nav-menu flex justify-center items-center gap-10 ${
          open ? "hidden" : "block"
        }    `}
      >
        <li>
          <AnchorLink className="achor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="achor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="achor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="achor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div>
        <button className="connect max-sm:hidden rounded-full py-2 px-5">
          <AnchorLink
            className=" rounded-full py-2 px-5"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
