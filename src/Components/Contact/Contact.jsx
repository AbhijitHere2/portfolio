import React from "react";
import "./Contact.css";
import Ablogo from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "164158ec-bdac-4049-b978-dafdfa27f66f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <div
      onSubmit={onSubmit}
      id="contact"
      className="flex-col  items-center justify-center my-24 "
    >
      <div className="about-title flex justify-center items-center  relative  ">
        <h1 className="text-5xl  absolute bottom-0 ">Get In Touch</h1>
        <img className="   " src={Ablogo} alt="" />
      </div>
      <div className=" flex items-center justify-evenly gap-16 mt-14 px-16 max-sm:px-0 max-lg:flex-col">
        <div className="contact-left ">
          <h1 className="Abhi-contact text-5xl"> Let's talk</h1>
          <p className="text-[#d8d8d8] text-lg">
            i'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime
          </p>
          <div className=" contact-details mt-5 text-[#d8d8d8]">
            <div className="contact-detail">
              <img src={mail_icon} alt="" className="w-6" />
              <p>GaikwadAbhijit667@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" className="w-6" />
              <p>+91 - 7709862767</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" className="w-5" />
              <p>Nagpur , MH , India</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <form className="contact-right flex flex-col justify-center items-start gap-5 text-[#d8d8d8]  ">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
            <label htmlFor="mail">Your Email</label>
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter Your Email"
            />
            <label htmlFor="Message">Write your massage here</label>
            <textarea
              name="Message"
              rows={8}
              id="Message"
              placeholder="Enter Your Message"
            ></textarea>

            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
