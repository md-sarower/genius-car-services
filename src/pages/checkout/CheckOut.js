import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    /* const [user, setUser] = useState({
        name: 'Sarower Hossain',
        email: 'sarower9415@gmail.com',
        address: 'House# 269, Road# 19, New DOHS Mohakhali, Dhaka',
        phone: '01720461048'
    })

    const handleAddressChange = event => {
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        setUser(newUser);
    }
 */

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://limitless-mesa-88777.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='my-4'>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="" placeholder='Type your name' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id="" placeholder='Type your email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" id="" placeholder='Service Name' required readOnly /> <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='Type your address' required autoComplete='off' /> <br />
                <input className='w-100 mb-2' type="number" name="phone" id="" placeholder='Type your phone number' required /> <br />
                <input className='btn btn-primary mt-1' type="submit" value="Place Order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;