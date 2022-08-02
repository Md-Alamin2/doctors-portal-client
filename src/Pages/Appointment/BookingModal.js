import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';
const BookingModal = ({ treatment, date, setTreatment}) => {
  const { name, slots, _id } = treatment;
  const [user, loading, error] = useAuthState(auth);

const formattedDate = format(date, "PP");

  const handleBooking = e =>{
    e.preventDefault();
    const slot = e.target.slot.value;
    
    const booking ={
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientName: user.displayName,
      patientEmail: user.email,
      phone: e.target.phone.value
  }
  
  fetch('http://localhost:5000/booking', {
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
  })

  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.success){
      toast.success(`Appointment set on ${formattedDate} at ${slot}`, {
        position: "top-center",} 
        
        )
    }
    else{
      toast.error(`Already have a Appointment on ${data.booking?.date} at ${data.booking?.slot}`,{ position: "top-center"})
    }
    setTreatment(null);

  })

   
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
        <label
          htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="text-center my-4">
          <h3 className="font-bold text-lg">{name}</h3>
          </div>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3  justify-items-center">
          <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
          <select name="slot" className="select select-bordered w-full max-w-xs">
                {
                    slots.map((slot, index)  => <option 
                    key={index}
                    value={slot}
                    >{slot}</option>)
                }
                </select>
          <input type="text" value={user?.displayName || ''} disabled className="input input-bordered w-full max-w-xs" />
          <input type="Email" value={user?.email || ''} disabled className="input input-bordered w-full max-w-xs" />
          <input type="number" placeholder="Phone Number" name="phone" className="input input-bordered w-full max-w-xs" />
          <input type="submit" placeholder="Type here" className="btn btn-accent w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
