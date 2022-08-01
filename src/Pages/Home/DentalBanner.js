import React from "react";
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";
const DentalBanner = () => {
  return (
    <div className="hero min-h-max ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="lg:ml-20">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
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
