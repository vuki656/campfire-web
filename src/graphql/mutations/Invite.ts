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

export const CREATE_INVITE = gql`
    mutation CreateInvite($input: CreateInviteInput!) {
        creteUserInvite(input: $input) {
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
