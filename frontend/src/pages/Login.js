import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {handleError} from '../utils';
import { handleSuccess } from '../utils';

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handlelogin = async (e) =>{
        e.preventDefault();
        
        const {email,password}  = loginInfo;
        if( !email || !password){
            return handleError('email and password are required')
        }

        try{
            const url = "https://auth-mern-app-api-pearl.vercel.app/";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error} = result;
            if(success){
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser',name);
                setTimeout(()=>{
                    navigate('/Home')
                }, 1000)
            } else if(error){
                const details = error?.details[0].message;
                handleError(details);
            } else if(!success){
                handleError(message);
            }
            console.log(result);
        }catch(err){
            handleError(err);
        }

    }
    
  return (
    <div className='container'>
        <h1> LOGIN</h1>
        <form onSubmit={handlelogin}>
            
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    onChange={handleChange}
                    type='email'
                    id='email'
                    name='email'
                    autoComplete='email'
                    required
                    placeholder='enter your email...'
                    value={loginInfo.email}
                />    
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    onChange={handleChange}
                    type='password'
                    id='password'
                    name='password'
                    autoComplete='current-password'
                    required
                    placeholder='enter your password...'
                    value={loginInfo.password}
                />    
            </div>
            <button type='submit'>Login</button>
            <span>Don't have an account ?
                <Link to = "/Signup">Signup</Link>
            </span>

        </form>
        <ToastContainer/>
      
    </div>
  );
}
export default Login 
