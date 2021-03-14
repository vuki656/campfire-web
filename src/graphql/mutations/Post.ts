import { gql } from 'graphql-tag'

import { POST_PAYLOAD } from '../fragments'

export const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            post{
                ...PostPayload
            }
        }
    }
    ${POST_PAYLOAD}
`

export const FAVORITE_POST = gql`
    mutation FavoritePost($input: FavoritePostInput!) {
        favoritePost(input: $input) {
            post {
                ...PostPayload
            }
        }
    }
    ${POST_PAYLOAD}
`
