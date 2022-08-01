import React from 'react';

const Service = ({service, setTreatment}) => {
  const {name, slots} = service;
    return (
      
      // available slot cards
        <div class="card bg-base-100 shadow-xl"> 
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl text-secondary">{name}</h2>
          <p className='text-[15px]'>
            {slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span> }
          </p>
          <p className='text-sm'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
          <div class="card-actions">
           
            <label 
              for="booking-modal"
              disabled={slots.length === 0}  
              onClick={() => setTreatment(service) }
              class="btn btn-secondary  text-white">Book Appointment</label>

          </div>
        </div>
      </div>
    );
};

export default Service;