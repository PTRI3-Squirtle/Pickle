/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
const LeftNavBar = (): JSX.Element => {
  const history = useHistory();
  return (
    <div className='leftNavBar'>
      <div className='leftNavBar_top'></div>
      <button className='button'>Home</button>
      <button className='button'>Notifications</button>
      <button className='button'>Messages</button>
      <button className='button'>Bookmarks</button>
      <button className='button'>Lists</button>
      <button className='button'>Profile</button>
      <button className='button' onClick={() => history.push('/post')}>
        Post
      </button>
      <div className='leftNavBar_bottom'></div>
    </div>
  );
};

export default LeftNavBar;
