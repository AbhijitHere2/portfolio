import React from "react";
import "./Footer.css";
import logo from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className=" flex flex-col  justify-center px-16  max-sm:px-5 gap-5 mt-40 ">
      <div className=" flex justify-around  items-center gap-5 max-sm:flex-col">
        <div className="footer-top-left flex flex-col gap-5 ">
          <div className="flex relative  items-center  ">
            <img className=" w-20 " src={logo} alt="" />
            <h1 className="text-4xl absolute  ">Abhi</h1>
          </div>
          <p className="w-[80%] max-lg:w-full">
            Front-End Developer passionate about crafting responsive,
            user-friendly websites. Bringing web designs to life with
            cutting-edge technologies and best practices
          </p>
        </div>
        <div className=" footer-right flex justify-center items-center gap-3  ml-5 max-sm:flex-col">
          <div className=" footer-email flex items-center justify-center   ">
            <img src={user_icon} alt="" />
            <input type="email" name="email" placeholder=" Enter your email " />
          </div>
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className=" flex justify-around items-center mb-5 max-sm:flex-col gap-5">
        <p>© 2024 Abhi Gaikwad . All rights reserved</p>
        <div className=" flex justify-around items-center gap-5 " >   
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
