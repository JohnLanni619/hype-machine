
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Countdown {
  _id: ID
  countdownTitle: String
  createdAt: String
  username: String
  commentCount: Int
  comments: [Comment]
}

 type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
  }

type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  countdowns: [Countdowns]
  friends: [User]
}

type Query {
  users: [User]
  user(username: String!): User
  countdowns(username: String): [countdown]
  countdown(_id: ID!): Countdown
}

`;

// export the typeDefs
module.exports = typeDefs;