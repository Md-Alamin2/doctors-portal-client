import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
       
        setServices(data)
      });
  }, [services]);

  const imageStorageKey = 'd0fc6c9df820d073a68ada83e9d64909';

    /**
     * 3 way to store images
     * 1. Third party storage // free open storage is ok for practice project
     * 2.Your won storage your own server(file system)
     * 3.Database: mongodb 
     * 
     * YUP: to validate file: search:  Yup file validation for react hook form 
     * */ 
     const onSubmit = async data => {
      const image = data.images[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res=>res.json())
      .then(result =>{
          if(result.success){
              const img = result.data.url;
              const doctor = {
                  name: data.name,
                  email: data.email,
                  specialty: data.specialty,
                  img: img
              }
              // send to your database 
              fetch('http://localhost:5000/doctor', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json',
                      authorization: `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(doctor)
              })
              .then(res =>res.json())
              .then(inserted =>{
                  if(inserted.insertedId){
                      toast.success('Doctor added successfully')
                    
                  }
                  else{
                      toast.error('Failed to add the doctor');
                  }
              })

          }
          
      })
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-2">
      <h2 className="text-2xl">Add a new doctor </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ------------------name---------------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is require*",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name?.message}
              </span>
            )}
          </label>
        </div>
        {/* ------------email-------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is require*",
              },
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
          </label>
        </div>
        {/* -------------Specialty----------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs mb-3"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          {/* ------------------Upload Photo */}
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Images"
            className="input input-bordered w-full max-w-xs"
            {...register("images", {
              required: {
                value: true,
                message: "Images is require*",
              },
            })}
          />
        
        
        </div>
        </div>
        {/* ------------Submit-------------  */}

        <input
          className="btn w-full max-w-xs text-white mt-3"
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
