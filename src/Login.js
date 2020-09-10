import React,{useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './Firebase';

function Login() {
    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                
                history.push('/')
            })
            .catch((e)=> alert(e.message));
            }

    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth =>{

                history.push('/')
            })
            .catch((e)=>alert(e.message));
            };
    return (
        
        <div className='login'>
            <Link to='/'>
            <img 
                className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
                alt=''
                      
            />    
            </Link>  
            <div className='login__container'>
                
                    <h1>Sign In</h1>
                <form className='login__form'>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type='email' />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type='password' />
                    <button onClick={login} className='login__signInButton' type='submit' >Sign In</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={register} className='login__registerButton'>Create a new account</button>
                </form>  
            </div>
        </div>
    )
}

export default Login
