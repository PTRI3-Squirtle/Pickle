/** @format */

/** @format */

const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const express = require('express');
const app = express();
// const path = require('path');
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, './build')));

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../../index.html'));
// });

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);

module.exports = app;
