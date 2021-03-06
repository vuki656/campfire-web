import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { Button } from '@dvukovic/dujo-ui'
import dayjs from 'dayjs'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import React from 'react'

import { FAVORITE_POST } from '../../graphql/mutations/Post'
import { USER } from '../../graphql/queries'
import type {
    FavoritePostMutation,
    FavoritePostMutationVariables,
    UserQuery,
} from '../../graphql/types'

import {
    PostActions,
    PostAuthorImage,
    PostAuthorUsername,
    PostContent,
    PostDate,
    PostDescription,
    PostHeader,
    PostImage,
    PostRoot,
} from './Post.styles'
import type { PostProps } from './Post.types'

export const Post: React.FunctionComponent<PostProps> = (props) => {
    const { post } = props

    const { data } = useQuery<UserQuery>(USER)

    const router = useRouter()

    const [favoritePostMutation] = useMutation<FavoritePostMutation, FavoritePostMutationVariables>(FAVORITE_POST)

    const handleFavorite = () => {
        void favoritePostMutation({
            refetchQueries: ['Group', 'FavoritePosts'],
            variables: {
                input: {
                    postId: post.id,
                },
            },
        })
    }

    const isFavorited = post.favoritedBy?.some((favorite) => {
        return data.user.id === favorite.userId
    })

    return (
        <PostRoot>
            <PostHeader>
                <PostAuthorImage
                    height={40}
                    src={post.author.imageURL}
                    width={40}
                />
                <PostAuthorUsername>
                    {post.author.username}
                </PostAuthorUsername>
                <PostDate>
                    {dayjs(post.createdAt).format('HH:MM A MMM D, YYYY')}
                </PostDate>
            </PostHeader>
            <PostContent>
                {post.description
                    ? (
                        <PostDescription>
                            {post.description}
                        </PostDescription>
                    )
                    : null}
                <PostImage
                    alt={post.title}
                    loading="lazy"
                    src={post.imageLink}
                />
                <PostActions>
                    <Button
                        onClick={handleFavorite}
                        startIcon={(
                            <Image
                                height={15}
                                quality={100}
                                src={
                                    isFavorited
                                        ? '/icons/star-filled.svg'
                                        : '/icons/star.svg'
                                }
                                width={15}
                            />
                        )}
                        variant="outlined"
                    >
                        {post.favoritedBy?.length}
                        {' '}
                        Favourite
                    </Button>
                    <Button
                        onClick={() => {
                            void router.push(post.link)
                        }}
                        variant="outlined"
                    >
                        Source
                    </Button>
                </PostActions>
            </PostContent>
        </PostRoot>
    )
}
