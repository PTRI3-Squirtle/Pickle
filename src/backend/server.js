/** @format */

/** @format */

const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const http = require('http');

const express = require('express');
const app = express();
const path = require('path');
// const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../../build')));

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../../index.html'));
});

const port = process.env.PORT || 9090;

// const server = new ApolloServer({ resolvers, typeDefs });

app.listen(port, function () {
  console.log(`server running on port ${port}`);
  console.log(`gql path is ${apolloServer.graphqlPath}`);
});

module.exports = app;
