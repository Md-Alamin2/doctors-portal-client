import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index }) => {

  //--------------------- delete user ---------------------//
  const handleDelete = (email) =>{
    fetch(`http://localhost:5000/user/${email}`, {
        method: 'DELETE',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount){
                toast.success(`user is deleted.`)
        }
    })
  }

    const {email,role} =user;
    const makeAdmin = ()=>{
      fetch(`http://localhost:5000/user/admin/${email}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
      .then(res => {
        if(res.status === 403){
          toast.error('Fail to make an admin')
        }
        return res.json()})
      .then(data => {
       if(data.modifiedCount){
       
        toast.success(`successfully make an admin`)
       }
      })
    }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button  onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button onClick={()=> handleDelete(email)} class="btn btn-xs">Delete user</button></td>
    </tr>
  );
};

export default UserRow;
