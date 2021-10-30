import React from 'react';
import Post from './Post';
import { mockPostInterface } from '../types/types';




const Feed = () : JSX.Element => {

    const mockPost: mockPostInterface = {
        id: 1,
        description: 'this is an amazing post',
        username: 'Kevin',
        date: new Date(),  
    }

    return (
        <div>
            <h1>Feed</h1>
            <Post {...mockPost}/>
            <button>Post</button>
            <button>Search</button>
        </div>
    )
}

export default Feed;