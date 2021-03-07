import { gql } from '@apollo/client'

export const LOG_IN_USER = gql`
    mutation LogInUser($input: LogInUserInput!) {
        logInUser(input: $input) {
            token
        }
    }
`

export const INVITE_USER = gql`
    mutation InviteUser($input: InviteUserInput!) {
        inviteUser(input:$input) {
           invite {
               fromUser {
                   id
                   username
                   imageURL
               }
               toUser {
                   id
                   username
                   imageURL
               }
           } 
        }
    }
`
