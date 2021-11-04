/** @format */

import React from 'react';
import PickleImage from './PickleImage';

import { useHistory } from 'react-router-dom';
const LeftNavBar = (): JSX.Element => {
  const history = useHistory();
  return (
    <div className='leftNavBar'>
      <div className='leftNavBar_top'>
        <PickleImage />
      </div>
      <button className='button' onClick={() => history.push('/feed')}>Home</button>
      <button className='button'>Notifications</button>
      <button className='button'>Messages</button>
      <button className='button'>Bookmarks</button>
      <button className='button'>Lists</button>
      <button className='button'>Profile</button>
      <button className='button' onClick={() => history.push('/post')}>
        Post
      </button>
      <button className='button' onClick={() => history.push('/')}>
        Sign In
      </button>
      <div className='leftNavBar_bottom'></div>
    </div>
  );
};

export default LeftNavBar;
