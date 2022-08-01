import React from 'react';

const NameService = ({serviceName}) => {
    const {name} = serviceName;
    return (
        <div class="card bg-base-100 shadow-xl items-center">
        <div class="card-body">
          <h2 class="card-title text-secondary ">{name}</h2>
        </div>
      </div>
    );
};

export default NameService;