import { isLeafType } from 'graphql';
import React, { useState } from 'react';
import { mockPostInterface } from '../../types/types';
import ellipsis from '../../assets/ellipsis.svg';

const Post = (props: mockPostInterface) : JSX.Element => {
  const [expandComments, setExpandComments] = useState(false);
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
        <img onClick={()=> {setExpandComments(!expandComments)}} src={ellipsis} alt="ellipsis"></img>
      {expandComments &&
        <ul>
          <li>This is a comment</li>
          <li>This is another comment</li>
        </ul>}
      </div>
    </div>
    );
};

export default Post;