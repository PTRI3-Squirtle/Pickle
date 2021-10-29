import React from 'react';
import { mockPostType } from '../types/types';

const Post = (props: mockPostType) : JSX.Element => {
    console.log("props in post: ", props);
    return (
      <div>
        {/* 
            // an element for  the description
            // and element for the username
            // elements for comments */}
        <p>{props.description}</p>
        <p>{props.username}</p>
        <ul>
          <li>This is a comment</li>
          <li>This is another comment</li>
        </ul>
      </div>
    );
};

export default Post;