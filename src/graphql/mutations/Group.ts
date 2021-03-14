import { gql } from '@apollo/client'

import {
    GROUP_PAYLOAD,
    USER_PAYLOAD,
} from '../fragments'

export const CREATE_GROUP = gql`
    mutation CreateGroup($input: CreateGroupInput!) {
        createGroup(input: $input) {
            group {
                ...GroupPayload
            }
        }
    }
    ${GROUP_PAYLOAD}
`

export const EDIT_GROUP = gql`
    mutation EditGroup($input: EditGroupInput!) {
        editGroup(input: $input) {
            group {
                ...GroupPayload
            }
        }
    }
    ${GROUP_PAYLOAD}
`

export const KICK_USER = gql`
    mutation KickUser($input: KickUserFromGroupInput!) {
        kickUserFromGroup(input: $input) {
            group {
                ...GroupPayload
            }
        }
    }
    ${GROUP_PAYLOAD}
`
