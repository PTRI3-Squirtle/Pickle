/** @format */
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Layout from './Components/Layout';

// this imports the main Sass file, making it available in all components
import './main.scss';

import pickle from '../assets/pickle.jpg';
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
    <>
      <Router>
        <Layout></Layout>
      </Router>
    </>
  );
};

export default App;
