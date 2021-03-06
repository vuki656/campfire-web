import { gql } from '@apollo/client'

import { POST_PAYLOAD } from '../fragments/Post'

export const FAVORITE_POSTS = gql`
    query FavoritePosts {
        favoritePosts {
            ...PostPayload    
        }
    }
    ${POST_PAYLOAD}
`
