import { gql } from '@apollo/client'

export const USER = gql`
    query user {
        user {
            id
            username
            imageURL
        }
    }
`
