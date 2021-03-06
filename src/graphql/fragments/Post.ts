import { gql } from '@apollo/client/core'

export const POST_PAYLOAD = gql`
    fragment PostPayload on PostType {
        id
        description
        createdAt
        title
        siteName
        imageLink
        faviconLink
        link
        favoritedBy {
            userId
        }
        author {
            id
            username
            imageURL
        }
    }
`