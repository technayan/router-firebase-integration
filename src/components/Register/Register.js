import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Register Page</h2>
            <form>
                <input type="text" placeholder='Enter your name' /><br />
                <input type="email" placeholder='Enter your email' /><br />
                <input type="password" placeholder='Enter your password' /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;