/** @format */

const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
    password: String!
    zip: String!
  }

  type Message {
    id: ID!
    userName: String!
    message: String!
    messageSender: String!
    timeStamp: int!
  }

  type Post {
    id: ID!
    userName: String!
    zip: String!
    date: int!
    description: String!
    photo: String
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
    posts: [Post]
    messages: [Message]
  }

  type Mutation {
    sendMessage(id: ID!, userName: String!, zip: String): Message
    modifyPost(id: ID!, userName: String!, zip: String!): Post
  }
`;
module.exports = {
  typeDefs,
};
