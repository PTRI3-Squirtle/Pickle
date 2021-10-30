import React from 'react';
import { useState } from 'react';

const Signin = (): JSX.Element => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <p>Login</p>
            <form>
                <label htmlFor='username'>
                    <p>Username</p>
                    <input type='text'  id='username' onChange={e => setUserName(e.target.value)}></input>
                </label>
                <label htmlFor='password'>
                    <p>Password</p>
                    <input type='text'  id='password' name='password' onChange={e => setPassword(e.target.value)}></input>
                </label>
                <input type='submit' onClick={(e)=>{
                    e.preventDefault();
                    console.log("password: ", password);
                    console.log('userName:', userName)
                }}/>
            </form>
        </div>
    )
}

export default Signin;