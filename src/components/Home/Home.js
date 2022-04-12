import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Homepage</h2>
            <h4>{user && `Welcome ${user.displayName}`}</h4>
        </div>
    );
};

export default Home;