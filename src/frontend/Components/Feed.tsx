/** @format */

import React from 'react';
import Post from './Post';
import { mockPostInterface } from '../../types/types';
import { gql, useQuery } from '@apollo/client';

const Feed = (): JSX.Element => {
  const CREATE_POST = gql`
    query user {
      user(id: 1) {
        id
        userName
        email
        zip
      }
    }
  `;

  const postRequest = async () => {
    console.log('hello');
    const { loading, error, data } = await useQuery(CREATE_POST);
    console.log('hello2');
    if (loading) return 'loading';

    if (error) return `Error! ${error}`;
    else {
      console.log('data: ', data);
    }
  };

  const mockPost: mockPostInterface = {
    id: 1,
    description: 'this is an amazing post',
    username: 'Kevin',
    date: new Date(),
  };

  return (
    <div>
      <h1>Feed</h1>
      <Post {...mockPost} />
      <button>Post</button>
      <button>Search</button>
    </div>
  );
};

export default Feed;
