import React from "react";
import "./About.css";
import Ablogo from "../../assets/theme_pattern.svg";
import Ababhi from "../../assets/abhi.jpg";

const About = () => {
  return (
    <div id="about" className="flex-col  items-center justify-center mt-24 ">
      <div className="about-title flex justify-center items-center  relative  ">
        <h1 className="text-5xl  absolute ">About Me</h1>
        <img className="w-32   " src={Ablogo} alt="" />
      </div>
      <div className="about-section mt-10 gap-5 flex max-lg:flex-col lg:ms-16">
        <div className="about-left flex justify-center">
          <img src={Ababhi} className="  h-[50%]  max-lg:w-[50%] mt-10  " alt="" />
        </div>
        <div className="about-right p-5">
          <div className="about-para text-lg ">
            <p>
              “Hi, I'm Abhijit Gaikwad , a passionate front-end developer with a
              love for creating visually appealing and user-friendly websites.
              My journey in web development started with a curiosity for how
              websites work behind the scenes, which quickly turned into a
              passion for creating beautiful, user-friendly designs. Since then,
              I've been hooked on the magic of coding and transforming creative
              ideas into seamless digital experiences. ”{" "}
            </p>

            <p>
              <br />I specialize in crafting responsive, accessible, and
              interactive websites using technologies like HTML5, CSS3, and
              JavaScript. Lately, I've been diving deep into React, and I love
              how it enables me to build dynamic, scalable applications with
              ease. I’m always excited to learn new technologies and improve my
              skills. <br />
              When I'm not coding, you'll find me exploring new tech trends or
              take a walk and relaxing mind and body .
            </p>
            <br />
            <p className=""> Let’s create something amazing together!</p>
            <br />
            <br />
          </div>
          <div className="flex-col  space-y-5 ml-10 ">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "58%" }} />
            </div>
            <div className="about-skill">
              <p> Javascript</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
