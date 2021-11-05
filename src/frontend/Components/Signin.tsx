/** @format */

import React from 'react';
import { useState } from 'react';

const Signin = (): JSX.Element => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='loginContainer'>
      <div className='signin_element_wrapper component_title'>Login</div>
      <div className='signin_element_wrapper'>
        <form>
          <label htmlFor='username'>
            <p>Username</p>
            <input
              type='text'
              id='username'
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </label>
          <label htmlFor='password'>
            <p>Password</p>
            <input
              type='text'
              id='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <input
          className='greenButton'
            type='submit'
            id='submit'
            onClick={(e) => {
              e.preventDefault();
              console.log('password: ', password);
              console.log('userName:', userName);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Signin;
