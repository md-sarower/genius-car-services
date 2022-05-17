import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';
import SocialLogin from './socialLogin/SocialLogin';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        /* console.log(event.target.email.value);
        console.log(event.target.password.value); */
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <div className='checkbox'>
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept Terms and Condition</label>
                </div>
                <input className='bg-primary text-white border-0 rounded-3 w-25' type="submit" value="Register" />
            </form>
            <p className='mt-4 text-center'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <div className='w-50 d-block mx-auto'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;