/** @format */
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Layout from './Components/Layout';
import Pickle from './Components/PickleImage';
import Feed from './Components/Feed';
import Signin from './Components/Signin';
import CreateNewPost from './Components/CreateNewPost';

// this imports the main Sass file, making it available in all components
import './main.scss';

import { gql, useQuery } from '@apollo/client';
import Post from './Components/Post';

const App = () => {
  // query definition for graphql
  const GET_USER = gql`
    query Query {
      users {
        id
        userName
        email
        password
        zip
      }
    }
  `;

  // this function executes the query
  const postRequest = async () => {
    const { loading, error, data } = await useQuery(GET_USER);

    if (loading) return 'loading';

    if (error) return `Error! ${error}`;
    else {
      console.log('data: ', data);
    }
  };

  const getRequest = async () => {};
  // postRequest();
  // getRequest();

  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Signin}>
          <Signin />
        </Route>
        <Route exact path='/pickle' component={Pickle}>
          <Pickle />
        </Route>
        <Route exact path='/feed' component={Feed}>
          <Feed/>
        </Route>
        <Route exact path='/post' component={CreateNewPost}>
          <CreateNewPost/>
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
