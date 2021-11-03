import React from 'react';
import Post from './Post';
import { mockPostInterface } from '../../types/types';




const Feed = (): JSX.Element => {

  const mockPost: mockPostInterface = {
    id: 1,
    description: 'this is an amazing post',
    username: 'Kevin',
    date: new Date(),
  }
  
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
      <button className='greenButton'>
        Post
      </button>
    </div>
  </div>
  )
}

export default Feed;