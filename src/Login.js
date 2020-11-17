import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    {/* Need to add a const to track what goes into the input fields */}
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // Prevents page from refreshing

        // some fancy firebase login shit
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // Sucessfully created a new user with email & password
            console.log(auth);
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="login__container">
                {/* contains all the user input */}
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {/* Setting the type to password makes the letters you enter show up as asterisks */}

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign-In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Internet Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
