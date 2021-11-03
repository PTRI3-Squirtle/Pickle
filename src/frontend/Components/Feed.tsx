import React, { useState, FC } from 'react';

import Modal from './Modal';
import Post from './Post';

import { mockPostInterface } from '../../types/types';

const Feed:FC = () => {

  const mockPost: mockPostInterface = {
    id: 1,
    description: 'this is an amazing post',
    username: 'Kevin',
    date: new Date(),
  }

  const [showModal, setShowModal] = useState<boolean>(false);
  
  return (
  <div className='feed'>
    <div className='feed_header_wrapper'>
      <h1>
        Feed
      </h1>
      <button className='greenButton'>
        Search
      </button>
    </div>
    <div className='feed_posts_wrapper'>
      <Post {...mockPost} />
    </div>
    <div className='feed_postButton_wrapper'>  
      <button className='greenButton' onClick={():void => setShowModal(!showModal)}>
        Post
      </button>
      {showModal && <Modal />}
    </div>
  </div>
  )
}

export default Feed;