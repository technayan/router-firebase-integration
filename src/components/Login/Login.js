import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    return (
        <div>
            <h2>Login Page</h2>

            <div style={{margin: '10px'}}>
                <button onClick={() => signInWithGoogle()}>Sign In with Google</button>
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