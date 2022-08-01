import React from "react";
import bg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section style={{ 
      background: `url(${bg})`,
      backgroundSize: 'cover'
      }} className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center my-8">
          <h3 className="text-secondary  text-2xl uppercase">Contact Us</h3>
          <h2 className="text-white text-3xl">Stay Connected With Us</h2>
        </div>
        <input 
            type="email" 
            placeholder="Email Address" 
            className="input w-full max-w-xs" />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full my-4 max-w-xs"
        />
        <textarea
          className="textarea w-full lg:h-28 max-w-xs "
          placeholder="Your Message"
        ></textarea>
        <div className="my-5">
        <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
