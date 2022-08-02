import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section   className='flex justify-center items-center p-1 my-28' style={{background: `url(${appointment})`,backgroundSize: 'cover',}}>
            <div className='flex-1 hidden lg:block'>
                <img className='lg:mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-secondary text-2xl font-bold'>Appointment</h3>
                <h2 className='text-3xl my-4 text-white'>Make an appointment Today</h2>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Stared</PrimaryButton>
            </div>
        </section> 
    );
};

export default MakeAppointment;