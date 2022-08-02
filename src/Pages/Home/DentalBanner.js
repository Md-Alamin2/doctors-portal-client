import React from "react";
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";
const DentalBanner = () => {
  return (
    <div className="hero min-h-max ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="lg:max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="lg:ml-20">
          <h1 className="lg:text-5xl md:text-5xl text-2xl  font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalBanner;
