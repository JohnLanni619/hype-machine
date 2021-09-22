import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!,
    $email: String!,
    $password: String!
  ) {
    addUser(
      username: $username,
      email: $email,
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COUNTDOWN = gql `
  mutation addCountdown(
    $countdownTitle: String!, 
    $targetDate: String!
  ) {
    addCountdown(
      countdownTitle: $countdownTitle, 
      targetDate: $targetDate
    ) {
      _id
      countdownTitle
      createdAt
      username
      targetDate
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql `
  mutation addComment($countdownId: ID!, $commentText: String!) {
    addComment(countdownId: $countdownId, commentText: $commentText) {
      _id
      commentCount
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;
