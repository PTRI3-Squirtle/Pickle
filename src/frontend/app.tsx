/** @format */
import './main.scss';
import pickle from '../assets/pickle.jpg';
import Signin from './Signin';
import Feed from './Feed';
import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
const App = () => {
  const GET_USER = gql`
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
    const { loading, error, data } = await useQuery(GET_USER);
    console.log('hello2');
    if (loading) return null;

    if (error) return `Error! ${error}`;
    else {
      console.log('data: ', data);
    }
  };

  const getRequest = async () => {};
  postRequest();
  // getRequest();

  return (
    <div>
      "PPPICKLE"
      <img src={pickle} alt="It's a pickle!!!"></img>
      <Signin></Signin>
      <Feed></Feed>
    </div>
  );
};

export default App;
