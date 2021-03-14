import { gql } from '@apollo/client/core'

import { POST_PAYLOAD } from './Post'
import { USER_PAYLOAD } from './User'

export const GROUP_PAYLOAD = gql`
    fragment GroupPayload on GroupType {
        id
        name
        posts  {
            ...PostPayload
        }
        author {
            ...UserPayload
        }
    }
    ${POST_PAYLOAD}
    ${USER_PAYLOAD}
`
