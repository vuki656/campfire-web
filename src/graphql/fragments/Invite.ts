import { gql } from '@apollo/client/core'

import { USER_PAYLOAD } from './User'

export const INVITE_PAYLOAD = gql`
    fragment InvitePayload on InviteType {
        id
        fromUser {
            ...UserPayload
        }
        toUser {
            ...UserPayload
        }
    }
    ${USER_PAYLOAD}
`
