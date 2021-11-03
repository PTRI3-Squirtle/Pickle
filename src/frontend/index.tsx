/** @format */

import ReactDOM from 'react-dom';
import App from './app';

import {
  gql,
  useQuery,
  useMutation,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:9090/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
