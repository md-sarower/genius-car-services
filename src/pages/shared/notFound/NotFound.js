import React from 'react';
import sleeping from '../../../images/sleeping.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center mt-4'>Mechanic is sleeping</h2>
            <img className='error-image mt-4' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;