import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    })

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
    }

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider )
        .then (result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.error(error.message);
        })
    }
    
    return {user, setUser, signInWithGoogle, handleSignOut};

}

export default useFirebase;