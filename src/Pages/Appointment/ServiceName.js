import React, { useEffect, useState } from 'react';
import NameService from './NameService';
import { format } from 'date-fns';

const ServiceName = ({date}) => {
    const [servicesName, setServicesName] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServicesName(data))
    },[])
    return (
        <div className='my-10 text-[20px]'>
            <div className='text-center'>
            <h3 className='text-secondary '>Available services on {format(date, 'PP')}</h3>
            <h3>Please Select the Service</h3>
            </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
           {
                servicesName.map(serviceName => <NameService
                key={serviceName._id}
                serviceName={serviceName}
                />)
            }
           </div>
        </div>
    );
};

export default ServiceName;