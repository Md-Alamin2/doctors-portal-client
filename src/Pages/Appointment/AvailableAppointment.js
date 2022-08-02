import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
   
    return (
        <div>
            <h3 className='text-center my-10 text-secondary text-[20px]'>Available slots for Teeth Orthodontics.</h3>
            

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    services.map(service => <Service 
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    />)
                }
                {treatment && <BookingModal key={treatment.name} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal> }
            </div>
        </div>
    );
};

export default AvailableAppointment;