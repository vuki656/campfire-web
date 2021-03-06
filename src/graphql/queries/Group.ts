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
