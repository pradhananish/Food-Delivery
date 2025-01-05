import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
                </div>
                <div className='login-popup-inputs'> 
                    {currentState === "Sign up" && ( <input type='text' placeholder='Name' required />)}
                    <input type='email' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <button>{currentState === "Sign up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, I agree to the terms of use and privacy policy</p>
                </div>
                {currentState === "Login" ? (
                    <p>Create a new account?{" "}<span onClick={() => setCurrentState("Sign up")}>Click Here</span></p>
                ) : (
                    <p>Already have an account?{" "}<span onClick={() => setCurrentState("Login")}>Login Here</span></p>
                )}
            </form>
        </div>
    );
};

export default Login;

