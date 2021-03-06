import { Button } from '@dvukovic/dujo-ui'
import dayjs from 'dayjs'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

import {
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

    const router = useRouter()

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
                <Button
                    onClick={() => {
                        void router.push(post.link)
                    }}
                    variant="outlined"
                >
                    Source
                </Button>
            </GroupPostContent>
        </GroupPostRoot>
    )
}
