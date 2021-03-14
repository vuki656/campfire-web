import { useQuery } from '@apollo/client'
import React from 'react'

import {
    Post,
    SectionHeader,
} from '../../components'
import { FAVORITE_POSTS } from '../../graphql/queries'
import type { FavoritePostsQuery } from '../../graphql/types'

import { FavoritesRoot } from './Favorites.styles'

export const Favorites: React.FunctionComponent = () => {
    const { data } = useQuery<FavoritePostsQuery>(FAVORITE_POSTS, {
        fetchPolicy: 'cache-and-network',
    })

    return (
        <FavoritesRoot>
            <SectionHeader title="Favorites" />
            {data?.favoritePosts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        post={post}
                    />
                )
            })}
        </FavoritesRoot>
    )
}
