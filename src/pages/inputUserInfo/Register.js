import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';
import SocialLogin from './socialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';


const Register = () => {
    const [agree, setAgree] = useState();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }


    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        /* console.log(event.target.email.value);
        console.log(event.target.password.value); */
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        // navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <div className='checkbox'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Terms and Condition</label>
                </div>
                <input disabled={!agree} className='bg-primary text-white border-0 rounded-3 w-25' type="submit" value="Register" />
            </form>
            <p className='mt-4 text-center'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <div className='w-50 d-block mx-auto'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;