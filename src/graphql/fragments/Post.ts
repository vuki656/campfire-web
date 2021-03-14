import { gql } from '@apollo/client/core'

import { USER_PAYLOAD } from './User'

export const POST_PAYLOAD = gql`
    fragment PostPayload on PostType {
        id
        description
        createdAt
        metadata {
            title
            siteName
            imageLink
            faviconLink
        }
        link
        favoritedBy {
            userId
        }
        author {
            ...UserPayload
        }
    }
    ${USER_PAYLOAD}
`
