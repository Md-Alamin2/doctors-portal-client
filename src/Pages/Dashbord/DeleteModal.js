import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ deletingDoctor,setDeletingDoctor }) => {
  const { name, email } = deletingDoctor;
//-----------------------delete doctor--------------------------//
  const handleDelete = () =>{
    fetch(`http://localhost:5000/doctor/${email}`, {
        method: 'DELETE',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount){
                toast.success(`doctor: ${name} is deleted.`)
                setDeletingDoctor(null)
        }
    })
  }
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete <span className="text-black"> ({name}) </span>
          </h3>
          
          <div class="modal-action">
          <button onClick={() => handleDelete() } class="btn btn-xs btn-error text-white">Delete</button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
