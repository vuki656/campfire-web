import { useQuery } from '@apollo/client'
import React from 'react'

import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Post } from '../../components/Post'
import { FAVORITE_POSTS } from '../../graphql/queries/Post'
import type { FavoritePostsQuery } from '../../graphql/types'

import { FavoritesRoot } from './Favorites.styles'

export const Favorites: React.FunctionComponent = () => {
    const { data } = useQuery<FavoritePostsQuery>(FAVORITE_POSTS, {
        fetchPolicy: 'cache-and-network',
    })

    return (
        <FavoritesRoot>
            <PageHeader title="Favorites" />
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
