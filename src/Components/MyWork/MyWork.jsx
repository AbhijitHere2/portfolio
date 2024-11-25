import React from "react";
import "./MyWork.css";
import Ablogo from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="flex-col  items-center justify-center mt-24 ">
      <div className="about-title flex justify-center items-center  relative  ">
        <h1 className="text-5xl  absolute bottom-0 ">My Latest Work</h1>
        <img className="   " src={Ablogo} alt="" />
      </div>
      <div className="MyWorkCont flex  flex-wrap justify-evenly items-center gap-10 mt-16 ">
        {mywork_data.map((work, index) => {
          return (
            <img
              className=" box-border cursor-pointer  "
              key={index}
              src={work.w_img}
              alt=""
              onClick={work.W_page}
            />
          );
        })}
      </div>
      <div className=" flex justify-center items-center   my-14  ">
        <div className="flex justify-center items-center cursor-pointer px-10 py-3 rounded-full gap-2 w-fit border-2  hover:gap-5  duration-300 transition-all">
          <p>Show More</p>
          <img className="w-4 " src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
