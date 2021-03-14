import { gql } from '@apollo/client'

import {
    GROUP_PAYLOAD,
    USER_PAYLOAD,
} from '../fragments'

export const GROUPS = gql`
    query Groups {
        userCreatedGroups {
            id
            name
            author {
                ...UserPayload
            }
        }
        userJoinedGroups {
            id
            name
            author {
                ...UserPayload
            }
        }
    }
    ${USER_PAYLOAD}
`

export const GROUP = gql`
    query Group($args: GroupArgs!) {
        group(args: $args)  {
            ...GroupPayload
        }
    }
    ${GROUP_PAYLOAD}
`
