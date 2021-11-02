/** @format */

const { prisma } = require('./database.js');

const User = {
  id: (parent, args, context, info) => parent.id,
  userName: (parent) => parent.userName,
  email: (parent) => parent.email,
  password: (parent) => parent.password,
  zip: (parent) => parent.zip,
};

const Message = {
  id: (parent, args, context, info) => parent.id,
  userName: (parent) => parent.userName,
  message: (parent) => parent.message,
  messageSender: (parent) => parent.messageSender,
  timeStamp: (parent) => parent.timeStamp,
};

const Post = {
  id: (parent, args, context, info) => parent.id,
  userName: (parent) => parent.userName,
  zip: (parent) => parent.zip,
  date: (parent) => parent.timeStamp,
  description: (parent) => parent.description,
};

const Query = {
  messages: (parent, args) => {
    return prisma.user.findMany({
      where: {
        messageSender: Number(args.id),
        message: prisma.message.findMany({}),
      },
    });
  },

  posts: (parent, args) => {
    return prisma.user.findMany({
      where: { id: Number(args.id), zip: Number(args.id) },
    });
  },

  users: (parent, args) => {
    return prisma.users.findMany({});
  },
  user: (parent, args) => {
    return prisma.user.findFirst({
      where: { id: Number(args.id) },
    });
  },
};

const Mutation = {
  addUser: (parent, args) => {
    return prisma.user.create({
      data: {
        userName: args.userName,
        email: args.email,
        password: args.password,
        zip: args.zip,
      },
    });
  },
  createPost: (parent, args) => {
    return prisma.post.create({
      data: {
        userName: args.userName,
        zip: args.zip,
        date: args.date,
        description: args.description,
        title: args.title,
        photo: args.photo,
      },
    });
  },
  // registerStudent: (parent, args) => {
  //   return prisma.student.create({
  //     data: {
  //       email: args.email,
  //       fullName: args.fullName,
  //       dept: args.dept,
  //     },
  //   });
  // },
  // enroll: (parent, args) => {
  //   return prisma.student.update({
  //     where: { id: Number(args.id) },
  //     data: {
  //       enrolled: true,
  //     },
  //   });
  // },
};

const resolvers = { User, Post, Message, Query, Mutation };

module.exports = {
  resolvers,
};
