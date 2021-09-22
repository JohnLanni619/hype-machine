
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  countdowns: [Countdown]
  friends: [User]
}

type Countdown {
  _id: ID
  countdownTitle: String
  createdAt: String
  username: String
  targetDate: String
  commentCount: Int
  comments: [Comment]
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  countdowns(username: String): [Countdown]
  countdown(_id: ID!): Countdown
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addCountdown(countdownTitle: String!, targetDate: String!): Countdown
  addComment(countdownId: ID!, commentText: String!): Countdown
  addFriend(friendId: ID!): User
  deleteCountdown(countdownId: ID!): User
}
`;

// export the typeDefs
module.exports = typeDefs;