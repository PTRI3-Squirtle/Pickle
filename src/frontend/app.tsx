/** @format */
import React from 'react';
import { ReactDOM } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// components
import Layout from './Components/Layout';

// this imports the main Sass file, making it available in all components
import './main.scss';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Layout>
          
        </Layout>
      </Router>
    </>
  );
};

export default App;
