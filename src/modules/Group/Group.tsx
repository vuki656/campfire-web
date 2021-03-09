import { useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { Post } from '../../components/Post'
import { GROUP } from '../../graphql/queries'
import type {
    GroupQuery,
    GroupQueryVariables,
} from '../../graphql/types'

import {
    GroupHeader,
    GroupPosts,
    GroupRoot,
    GroupTitle,
} from './Group.styles'
import { GroupAddDialog } from './GroupAddDialog'

export const Group: React.FunctionComponent = () => {
    const router = useRouter()

    const { data } = useQuery<GroupQuery, GroupQueryVariables>(GROUP, {
        fetchPolicy: 'network-only',
        variables: {
            args: {
                groupId: router.query.groupId as string,
            },
        },
    })

    return (
        <GroupRoot>
            <GroupHeader>
                <GroupTitle>
                    {data?.group?.name}
                </GroupTitle>
                <GroupAddDialog />
            </GroupHeader>
            <GroupPosts>
                {data?.group?.posts?.map((post) => {
                    if (!post) {
                        return null
                    }

                    return (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    )
                })}
            </GroupPosts>
        </GroupRoot>
    )
}
