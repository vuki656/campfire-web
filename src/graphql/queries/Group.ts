import { gql } from '@apollo/client'

import { GROUP_PAYLOAD } from '../fragments'

export const GROUPS = gql`
    query Groups {
        userGroups {
            ...GroupPayload
        }
        userJoinedGroups {
            ...GroupPayload
        }
    }
    ${GROUP_PAYLOAD}
`

export const GROUP = gql`
    query Group($args: GroupArgs!) {
        group(args: $args)  {
            ...GroupPayload
        }
    }
    ${GROUP_PAYLOAD}
`

export const NON_GROUP_MEMBERS = gql`
    query NonGroupMembers($args: NonGroupMembersArgs!) {
        nonGroupMembers(args: $args) {
            id
            imageURL
            username
        }
    }
`

export const GROUP_INVITES = gql`
    query GroupInvites($args: GroupInvitesArgs!) {
        groupInvites(args: $args) {
            fromUser {
                id
                imageURL
                username
            }
            toUser {
                id
                imageURL
                username
            }
        }
    }
`
