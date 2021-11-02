/** @format */

import React from 'react';

const LeftNavBar = (): JSX.Element => {
  return (
    <div className='leftNavBar'>
      <div className='leftNavBar_top'></div>
      <button className='button'>Home</button>
      <button className='button'>Notifications</button>
      <button className='button'>Messages</button>
      <button className='button'>Bookmarks</button>
      <button className='button'>Lists</button>
      <button className='button'>Profile</button>
      <button className='button'>Post</button>
      <div className='leftNavBar_bottom'></div>
    </div>
  );
};

export default LeftNavBar;
