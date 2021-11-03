import React from 'react';
import Post from './Post';
import { mockPostInterface } from '../../types/types';




const Feed = () : JSX.Element => {

    const mockPost: mockPostInterface = {
        id: 1,
        description: 'this is an amazing post. this is an amazing post. this is an amazing post. this is an amazing post. this is an amazing post',
        username: 'Kevin',
        date: new Date(),  
    }

    return (
        <div className='feedDisplay'>
            <div className='feedContainer'>
                <h1>Feed</h1>
                <Post {...mockPost}/>
                <Post {...mockPost}/>
                <Post {...mockPost}/>
            </div>
            <div className='postSearch'>
                <button>Post</button>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Feed;