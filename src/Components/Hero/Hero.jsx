import React from "react";
import "./Hero.css";
import abhi from "../../assets/abhi pic.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from '../../assets/abhiit resume.pdf'

const Hero = () => {
  return (
    <div
      id="home"
      className="flex justify-center flex-col items-center pt-28 
    gap-8 text-center "
    >
      <img className="w-64 rounded-full" src={abhi} alt="" />
      <h1 className="text-4xl head w-[50%] max-lg:w-[90%] text-center">
        <span className="AbhiName">I'm Abhijit Gaikwad , </span>Frontend
        Developer based in India
      </h1>
      <p className="w-[45%] max-lg:w-[70%]  robo ">
        Front-End Developer passionate about crafting responsive, user-friendly
        websites. Bringing web designs to life with cutting-edge technologies
        and best practices
      </p>
      
     
      <div className="space-x-5 flex">
        <button className="heroConnect  border-2  border-black rounded-full py-1 px-4 mx-2 hover:border-white">
          <AnchorLink className="connect" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </button>
        <button  className="border-2 rounded-3xl py-1 px-4 hover:border-purple-700 ">
        <a href={resume} download='resume'>  Download Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
