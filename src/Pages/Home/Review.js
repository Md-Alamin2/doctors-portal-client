import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt=""/>
            </div>
          </div>
          <div>
          <h4 className="text-xl mx-3">{review.name}</h4>
          <h4 className="text-1xl mx-3">{review.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
