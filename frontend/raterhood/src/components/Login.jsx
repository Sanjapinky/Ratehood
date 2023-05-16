import React, { useState } from 'react';
import firebase from './firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
// Handle successful login
                const user = userCredential.user;
                console.log('Logged in:', user.email);
            })
            .catch((error) => {
// Handle login error
                console.log('Login error:', error.message);
            });
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;


