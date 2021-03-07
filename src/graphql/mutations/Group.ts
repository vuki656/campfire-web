import { gql } from '@apollo/client'

import { GROUP_PAYLOAD } from '../fragments'

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

