import React from 'react';
import googleIcon from '../../../images/social-icon/google.png';
import facebookIcon from '../../../images/social-icon/facebook.png';
import githubIcon from '../../../images/social-icon/gitHub.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    if (user || user1) {
        navigate('/home');
    }

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} style={{ backgroundColor: '#F0F0F0' }} className='btn w-50 mx-auto d-block my-3'>
                    <img style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%', padding: '3px', marginRight: '3px' }} src={googleIcon} alt="" />
                    <span>Google Sign In</span>
                </button>
                <button className='btn btn-primary w-50 mx-auto d-block my-3'>
                    <img style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%', marginRight: '3px' }} src={facebookIcon} alt="" />
                    <span>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} style={{ backgroundColor: '#343D44' }} className='btn w-50 mx-auto d-block my-3'>
                    <img style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%', marginRight: '3px' }} src={githubIcon} alt="" />
                    <span>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;