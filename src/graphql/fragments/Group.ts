import { gql } from '@apollo/client/core'

import { POST_PAYLOAD } from './Post'

export const GROUP_PAYLOAD = gql`
    fragment GroupPayload on GroupType {
        id
        name
        posts  {
            ...PostPayload
        }
        author {
            id
            username
            imageURL
        }
    }
    ${POST_PAYLOAD}
`
