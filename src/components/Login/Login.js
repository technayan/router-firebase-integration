import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <input type="email" placeholder='Enter your email' /><br />
                <input type="password" placeholder='Enter your password' /><br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;