import { gql } from '@apollo/client'

import { USER_PAYLOAD } from '../fragments'

export const USER_INVITES = gql`
    query UserInvites {
        userInvites {
            id
            fromUser {
                ...UserPayload
            }
            group {
                id
                name
            }
        }
    }
    ${USER_PAYLOAD}
`

export const GROUP_INVITES = gql`
    query GroupInvites($args: GroupInvitesArgs!, $nonGroupMembersArgs: NonGroupMembersArgs!) {
        groupInvites(args: $args) {
            id
            fromUser {
                ...UserPayload
            }
            toUser {
                ...UserPayload
            }
        }
        nonGroupMembers(args: $nonGroupMembersArgs) {
            ...UserPayload
        }
    }
    ${USER_PAYLOAD}
`
