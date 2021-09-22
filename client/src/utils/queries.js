import { gql } from '@apollo/client';

export const QUERY_COUNTDOWNS = gql `
    query countdowns($username: String) {
        countdowns(username: $username) {
            _id
            countdownTitle
            createdAt
            username
            targetDate
            commentCount
            comments {
                _id
                commentText
                createdAt
                username
            }
        }
    }
`

export const QUERY_COUNTDOWN = gql `
    query countdown($id: ID!) {
        countdown(_id: $id) {
            _id
            countdownTitle
            createdAt
            username
            targetDate
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

export const QUERY_USER = gql `
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
            countdowns {
                _id
                countdownTitle
                createdAt
                username
                targetDate
                commentCount
            }
        }
    }
`

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            friendCount
            countdowns {
                _id
                username
                countdownTitle
                createdAt
                targetDate
                commentCount
                comments {
                    _id
                    commentText
                    createdAt
                    username
                }
            }
            friends {
                _id
                username
            }
        }
    }
`;