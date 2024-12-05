import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider, auth } from "../firebase";
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            let data = await signInWithPopup(auth, googleAuthProvider)
            console.log(data);
            
            navigate('/')
        } catch (err) {
            console.error(err);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome Back!</h1>
                <p className="login-subtitle">Sign in to continue</p>
                <button className="login-button" onClick={handleSubmit}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                        alt="Google Logo"
                        className="google-logo"
                    />
                    Sign In with Google
                </button>
            </div>
           <Link to={`/add`}>Add</Link> 
           <Link to={`/View`}>View</Link>  
        </div>
        
    );
};

export default Login;