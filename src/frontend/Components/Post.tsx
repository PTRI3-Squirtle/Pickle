import React, { useState } from 'react';
import { mockPostInterface } from '../../types/types';
import ellipsis from '../../assets/ellipsis.svg';

const Post = (props: mockPostInterface) : JSX.Element => {
    console.log("props in post: ", props);
    const [expandComments, setExpandComments] = useState(false);
    return (
      <div className='postContainer'>
        {/* 
            // an element for  the description
            // and element for the username
            // elements for comments */}
          <div className='postContent'>  
            <p>{props.description}</p>
            <p>{props.username}</p>
            <img className="ellipsisImage" onClick={()=> {setExpandComments(!expandComments)}} src={ellipsis} alt="ellipsis"/>
          </div>
        { expandComments && 
          <ul>
            <li>This is a comment</li>
            <li>This is another comment</li>
            <li>This is a comment</li>
            <li>This is another comment</li>
            <li>This is a comment</li>
            <li>This is another comment</li>
            <li>This is a comment</li>
            <li>This is another comment</li>
          </ul>
        }

      </div>
    );
};

export default Post;