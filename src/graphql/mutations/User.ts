import { gql } from '@apollo/client'

export const LOG_IN_USER = gql`
    mutation LogInUser($input: LogInUserInput!) {
        logInUser(input: $input) {
            token
        }
    }
`


