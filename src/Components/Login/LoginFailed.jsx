import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

    const [password, setPassword] = useState("password");

    return (
        <div className='divForm'>
            <p className='registeredFailed'>❌Username or password incorrect.</p>
            <form action='http://localhost:8081/api/users/auth/login' method="post" autoComplete='off' className='loginForm'>
                <p className='login'>Log In</p>
                <label htmlFor="username" className='labels'>Username</label>
                <br />
                <input type="text" name='username' className='inputBox' required/>
                <br />
                <label htmlFor="password" className='labels'>Password</label>
                <br />
                <input type={password} name='password' className='inputBox' id='passwordBox' required/>
                <br />
                <div className="divPass">
                    <input type="checkbox" name="checkbox" value='Show Password' 
                        onClick={() => password === "password" ? setPassword("text") : setPassword("password")}
                    />
                    <label htmlFor="checkbox" className='showPassLabel'>Show Password</label>
                </div>
                <Link to='/register' className='linkAlreadyAccount'><p className='alreadyAccount'>Create account</p></Link>
                <div className="divButtons">
                    <input type="reset" value="Reset" className='submitButton reset' />
                    <input type="submit" value="Submit" className='submitButton' />
                </div>
                
            </form>
        </div>
        
    )
};