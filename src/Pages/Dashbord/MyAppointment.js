import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setAppointments(data);
            });
    }
}, [user])

if(isLoading){
    return <Loading/>
}

  return (
      <div>
          <h2>My Appointments: {appointments.length}</h2>
          <div class="overflow-x-auto">
              <table class="table w-full">
                  <thead>
                      <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Treatment</th>
                          <th>Pay</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          appointments.map((a, index) =><tr>
                              <th>{index + 1}</th>
                              <td>{a.patientName}</td>
                              <td>{a.date}</td>
                              <td>{a.slot}</td>
                              <td>{a.treatment}</td>
                              <td>
                              {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success mt-3'>Pay</button></Link>}
                              {(a.price && a.paid) && <div className='bg-slate-700  rounded-md p-1'>
                                <p><span className='text-white  bg-green-500 p-1  rounded-md'>Paid</span></p>
                                <p className='text-white'>Transaction Id: <span className='text-success'>{a.transactionId}</span> </p>
                              </div> }
                              </td>
                          </tr>)
                      }
                      
                      
                  </tbody>
              </table>
          </div>
      </div>
  );
};

export default MyAppointment; 