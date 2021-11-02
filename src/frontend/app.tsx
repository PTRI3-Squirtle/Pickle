/** @format */
import React from 'react';
import { ReactDOM } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// components
import Layout from './Components/Layout';
import Pickle from './Components/PickleImage';
import Feed from './Components/Feed';
import CreateNewPost from './Components/CreateNewPost';

// this imports the main Sass file, making it available in all components
import './main.scss';

// this imports a hook and def for graphql queries
import { gql, useQuery } from '@apollo/client';

const App = () => {
  // query definition for graphql
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

  // this function executes the query
  const postRequest = async () => {
    console.log('hello');
    const { loading, error, data } = await useQuery(GET_USER);
    console.log('hello2');
    if (loading) return 'loading';

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
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/createpost'>
              {CreateNewPost}
            </Route>
            <Route exact path='/'>
              {Feed}
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
