import { gql } from '@apollo/client'

export const USER_INVITES = gql`
    query UserInvites {
        userInvites {
            fromUser {
                id
                username
            }
            group {
                id
                name
            }
        }
    }
`
