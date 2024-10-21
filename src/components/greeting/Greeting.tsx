import { FC, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from "../../fireBase/fireStore";

import './Greeting.css';

const Greeting: FC = () => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='greeting-container'>
            <div className='greeting-cute-star'></div>
            <div>
                <h2 className='greeting-actually'>Welcome, {user ? user.displayName : "user" }</h2>
                <p className='greeting-awesome-phrase'>
                    <i className="greeting-icon fa-solid fa-quote-left"></i> 
                    Infinity is not the limit
                    <i className="greeting-icon fa-solid fa-quote-right"></i>
                    Buzz Lightyear
                </p>
            </div>
        </div>
    )
}

export default Greeting;