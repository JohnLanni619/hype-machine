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