import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const User = () => {
    const [isLoading, setIsLoading ] = useState(null)
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => setUsers(data))
},[users])

if(isLoading){
    return <Loading></Loading>
}

return (
        <div>
            <h2>All user: {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
{
    users.map(user => <UserRow
    key={user._id}
    user={user}
    />)
}      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;