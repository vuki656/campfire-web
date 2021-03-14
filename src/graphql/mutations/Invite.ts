import { gql } from '@apollo/client'

import {
    INVITE_PAYLOAD,
    USER_PAYLOAD,
} from '../fragments'

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
                ...InvitePayload
            }
        }
    }
    ${INVITE_PAYLOAD}
`

export const ACCEPT_INVITE = gql`
    mutation AcceptInvite($input: AcceptInviteInput!) {
        acceptInvite(input: $input) {
            user {
                ...UserPayload
            }
        }
    }
    ${USER_PAYLOAD}
`

export const DECLINE_INVITE = gql`
    mutation DeclineInvite($input: DeclineInviteInput!) {
        declineInvite(input: $input) {
            invite {
                ...InvitePayload
            }
        }
    }
    ${INVITE_PAYLOAD}
`
