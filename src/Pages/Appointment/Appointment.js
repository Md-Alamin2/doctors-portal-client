import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import ServiceName from './ServiceName';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <ServiceName date={date}/>
            <AvailableAppointment date={date}/>
            <Footer/>

        </div>
    );
};

export default Appointment;