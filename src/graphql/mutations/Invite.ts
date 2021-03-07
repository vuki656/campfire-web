import { gql } from '@apollo/client'

export const DELETE_INVITE = gql`
    mutation DeleteInvite($input: DeleteInviteInput!) {
        deleteInvite(input: $input) {
            invite {
                fromUser {
                    id
                }
                toUser {
                    id
                }
            }
        }
    }
`
