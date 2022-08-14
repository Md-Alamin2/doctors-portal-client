import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";
import DeleteModal from "./DeleteModal"
const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, [doctors]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl"> Manage Doctors: {doctors.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Icon</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow key={doctor._id} doctor={doctor} index={index} setDeletingDoctor={setDeletingDoctor} />
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && <DeleteModal
      deletingDoctor={deletingDoctor}
      setDeletingDoctor={setDeletingDoctor}
      />}
    </div>
  );
};

export default ManageDoctors;
