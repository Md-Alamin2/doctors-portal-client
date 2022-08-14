import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LW8XzDR8av3uU1LhbRaEeqfVOVQYpT404HFyuD9p34Vzn6BpkAK1Mt1swUyGkowKxBoFBChidM8bDHwSdPrbTu8002SdJtqPP"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="card w-50 bg-base-100 max-w-md shadow-xl my-12 lg:mx-4 ">
        <div class="card-body">
          <p className="text-orange-500 font-bold">
            {" "}
            Hello, {appointment?.patientName}
          </p>
          <h2 class="card-title">
            Pay for:{" "}
            <span className="text-secondary">{appointment.treatment}</span>
          </h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            {appointment.slot}{" "}
          </p>
          <p className="font-bold">Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 lg:mx-4">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
