import React from 'react';

const NameService = ({serviceName}) => {
    const {name} = serviceName;
    return (
        <div className="card bg-base-100 shadow-md items-center">
        <div className="card-body">
          <h2 className="card-title text-secondary ">{name}</h2>
        </div>
      </div>
    );
};

export default NameService;