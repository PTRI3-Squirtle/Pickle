import { isLeafType } from 'graphql';
import React from 'react';
import { mockPostInterface } from '../../types/types';

const Post = (props: mockPostInterface) : JSX.Element => {

  return (
    <div className='post_wrapper'>
      <div>
        <p className='post_username'>
          {props.username[0]}
        </p>
      </div>
      <div className='post_description_wrapper'>
        <p>
          {props.description}
        </p>
        <ul>
          <li>This is a comment</li>
          <li>This is another comment</li>
        </ul>
      </div>
    </div>
    );
};

export default Post;