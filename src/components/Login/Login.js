import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, { replace: true });
        })
        
    }

    return (
        <div>
            <h2>Login Page</h2>

            <div style={{margin: '10px'}}>
                <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            </div>

            <form>
                <input type="email" placeholder='Enter your email' /><br />
                <input type="password" placeholder='Enter your password' /><br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;