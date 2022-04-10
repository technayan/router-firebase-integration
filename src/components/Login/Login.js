import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const {signInWithGoogle} = useFirebase();

    return (
        <div>
            <h2>Login Page</h2>

            <div style={{margin: '10px'}}>
                <button onClick={signInWithGoogle}>Sign In with Google</button>
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