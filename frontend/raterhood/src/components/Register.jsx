import React, { useState } from 'react';
import firebase from './firebase';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Handle successful registration
                const user = userCredential.user;
                console.log('Registered:', user.email);
            })
            .catch((error) => {
                // Handle registration error
                console.log('Registration error:', error.message);
            });
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
