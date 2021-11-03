/** @format */
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Layout from './Components/Layout';
import Pickle from './Components/PickleImage';
import Feed from './Components/Feed';
import Signin from './Components/Signin';

// this imports the main Sass file, making it available in all components
import './main.scss';

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
    <Router>
      <Layout>
        <Switch>
          <Route path='/pickle'>
            <Pickle />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/'>
            <Feed />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
