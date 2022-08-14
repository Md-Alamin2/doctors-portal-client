import React from "react";

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
  const { name, specialty , img } = doctor;


 

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="lg:w-14 rounded-lg ring ring-sky-500 ring-offset-4">
            <img
              src={img}
              alt={name}
            />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={()=> setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error text-white">
        Delete
      </label>
        
      </td>
    </tr>
  );
};

export default DoctorRow;
