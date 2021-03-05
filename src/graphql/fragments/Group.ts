import { gql } from '@apollo/client/core'

export const GROUP_PAYLOAD = gql`
    fragment GroupPayload on GroupType {
        id
        name
        author {
            id
            username
            imageURL
        }
    }
`
