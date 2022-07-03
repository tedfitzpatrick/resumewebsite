import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "./../../auth/useToken";


const SignIn = () => {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [signInName, setSignInName] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    
    const navigate = useNavigate();
    
    const onSignInButtonUsed = async () => {
        const response = await axios.post('http://localhost:8000/signin', {
            signInName: signInName,
            signInPassword: signInPassword    
        });
        const { token } = response.data;
        setToken(token);
        navigate('/');
    };    
    
    return (
    <div className='tf-signinform'>
        <h2>Sign In</h2>
        {errorMessage && <div>{errorMessage}</div>}
        <p>Please use name spongebob with password squarepants:</p>
        <form>
            <label htmlFor="tf-inputsigninname">Name</label>
            <input id="tf-inputsigninname" value={signInName} onChange={(event)=>{setSignInName(event.target.value)}} />
            <label htmlFor="tf-inputsigninpassword">Password</label>
            <input id="tf-inputsigninpassword" type="password" value={signInPassword} onChange={(event)=>{setSignInPassword(event.target.value)}} />
            <button onClick={onSignInButtonUsed} disabled={!signInName || !signInPassword}>Sign In</button>
        </form>
    </div>
    );
}

export default SignIn;
