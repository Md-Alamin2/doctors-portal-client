import React from 'react';

const PrimaryButton = ({children}) => {
    return (      
        <button className="btn btn-secondary text-gray-50  bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryButton;