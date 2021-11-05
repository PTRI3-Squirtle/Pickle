/** @format */

import React from 'react';
import { gql, useQuery } from '@apollo/client';
const CreateNewPost = (): JSX.Element => {
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

  return (
    <label>
      Post:
      <input type='text' name='post' />
    </label>
  );
};

export default CreateNewPost;
