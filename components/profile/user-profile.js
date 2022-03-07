// @ts-nocheck
// import { useSession, getSession } from 'next-auth/client';
// import { useState, useEffect } from 'react';

import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     getSession().then((session) => {
    //         if (!session) {
    //             window.location.href = '/auth';
    //         } else {
    //             setIsLoading(false);
    //         }
    //     });
    // }, []);

    // const [session, loading] = useSession();

    // if (isLoading) {
    //     return <p className={classes.profile}>Loading...</p>;
    // }

    // Redirect away if NOT auth

    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm />
        </section>
    );
}

export default UserProfile;
