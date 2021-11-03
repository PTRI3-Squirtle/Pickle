/** @format */

import React, { useState, useEffect } from 'react';
import Post from './Post';
import { mockPostInterface } from '../../types/types';
import { gql, useQuery } from '@apollo/client';

const Feed = (): JSX.Element => {
  const GET_POSTS = gql`
    query Query {
      posts {
        id
        userName
        zip
        date
        description
        title
        photo
      }
    }
  `;

  // Array of post components used to populate feed
  const postsArray: Array<JSX.Element> = [];
  // let variable;
  const postRequest = async (): Promise<any> => {
    console.log('hello');
    const { loading, error, data }: any = useQuery(GET_POSTS);
    console.log('hello2');
    if (loading) return 'loading';

    if (error) return `Error! ${error}`;
    else {
      //  console.log('data', data);
      // do .then() here ----(I get a rejected promise:  data.then is not a function)
      // data.then((getdata: any) => (variable = getdata));
      console.log('data inside useQuery Hook: ', data);
      for (let i = 0; i < data.posts.length; i++) {
        postsArray.push(
          <div className='feed_posts_wrapper'>
            <Post {...data.posts[i]} />
          </div>
        );
      }
      return data;
    }
  };
  // useEffect(async (): Promise<any> => await postRequest());

  postRequest();

  // const mockPost: mockPostInterface = {
  //   id: 1,
  //   description: 'this is an amazing post',
  //   username: 'Kevin',
  //   date: new Date(),
  // };

  // Return Value from Get request
  // const postsData: any = [
  //   {
  //     id: 2,
  //     description: 'string',
  //     userName: 'string',
  //     date: 1,
  //     title: 'string',
  //     photo: 'string',
  //     zip: 'string',
  //   },
  //   {
  //     id: 1,
  //     description: 'string',
  //     userName: 'string',
  //     date: 1,
  //     title: 'string',
  //     photo: 'string',
  //     zip: 'string',
  //   },
  // ];

  // for (let i = 0; i < postsData.length; i++) {
  //   postsArray.push(
  //     <div className='feed_posts_wrapper'>
  //       <Post {...postsData[i]} />
  //     </div>
  //   );
  // }

  return (
    <div className='feed'>
      <div className='feed_header_wrapper'>
        <h1>Feed</h1>
        <button className='greenButton'>Search</button>
      </div>
      {/* <div className='feed_posts_wrapper'>
        <Post {...mockPost} />
      </div> */}
      {postsArray}
      <div className='feed_postButton_wrapper'>
        <button className='greenButton'>Post</button>
      </div>
    </div>
  );
};

export default Feed;
