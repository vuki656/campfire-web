import { gql } from "@apollo/client/core"

export const USER_PAYLOAD = gql`
    fragment UserPayload on UserType {
        id
        imageURL
        username
    }
`
