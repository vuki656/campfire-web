import { gql } from '@apollo/client'

import { USER_PAYLOAD } from '../fragments'

export const USER = gql`
    query user {
        user {
            ...UserPayload
        }
    }
    ${USER_PAYLOAD}
`

export const VERIFY_USER = gql`
    query VerifyUser {
        verifyUser {
            isValid
        }
    }
`
