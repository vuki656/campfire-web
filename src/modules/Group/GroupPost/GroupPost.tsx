import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { Button } from '@dvukovic/dujo-ui'
import dayjs from 'dayjs'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import React from 'react'

import { FAVORITE_POST } from '../../../graphql/mutations/Post'
import { USER } from '../../../graphql/queries'
import type {
    FavoritePostMutation,
    FavoritePostMutationVariables,
    UserQuery,
} from '../../../graphql/types'

import {
    GroupPostActions,
    GroupPostAuthorImage,
    GroupPostAuthorUsername,
    GroupPostContent,
    GroupPostDate,
    GroupPostDescription,
    GroupPostHeader,
    GroupPostImage,
    GroupPostRoot,
} from './GroupPost.styles'
import type { GroupPostProps } from './GroupPost.types'

export const GroupPost: React.FunctionComponent<GroupPostProps> = (props) => {
    const { post } = props
    const { data } = useQuery<UserQuery>(USER)

    const router = useRouter()

    const [favoritePostMutation] = useMutation<FavoritePostMutation, FavoritePostMutationVariables>(FAVORITE_POST)

    const handleFavorite = () => {
        void favoritePostMutation({
            refetchQueries: ['Group'],
            variables: {
                input: {
                    postId: post.id,
                },
            },
        })
    }

    const isFavorited = post.favoritedBy.some((favorite) => {
        return data.user.id === favorite.userId
    })

    return (
        <GroupPostRoot>
            <GroupPostHeader>
                <GroupPostAuthorImage
                    height={40}
                    src={post.author.imageURL}
                    width={40}
                />
                <GroupPostAuthorUsername>
                    {post.author.username}
                </GroupPostAuthorUsername>
                <GroupPostDate>
                    {dayjs(post.createdAt).format('HH:MM A MMM D, YYYY')}
                </GroupPostDate>
            </GroupPostHeader>
            <GroupPostContent>
                {post.description
                    ? (
                        <GroupPostDescription>
                            {post.description}
                        </GroupPostDescription>
                    )
                    : null}
                <GroupPostImage
                    alt={post.title}
                    loading="lazy"
                    src={post.imageLink}
                />
                <GroupPostActions>
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
                        {post.favoritedBy.length}
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
                </GroupPostActions>
            </GroupPostContent>
        </GroupPostRoot>
    )
}
