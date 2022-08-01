import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard cardBody="Lorem Ipsum is simply dummy text of the pri" cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCard cardBody="Brooklyn, NY 10036, United States" cardTitle="Visit our location" bgClass="bg-[#3A4256]" img={marker}/>
            <InfoCard cardBody="+000 123 456789" cardTitle="Contact us now " bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}/>
        </div>
    );
};

export default Info;