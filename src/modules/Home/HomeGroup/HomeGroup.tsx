import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

import { USER } from '../../../graphql/queries'
import type { UserQuery } from '../../../graphql/types'
import { HomeEditDialog } from '../HomeEditDialog'

import {
    HomeGroupActions,
    HomeGroupAuthor,
    HomeGroupHeader,
    HomeGroupRoot,
    HomeGroupTitle,
} from './HomeGroup.styles'
import type { HomeGroupProps } from './HomeGroup.types'

export const HomeGroup: React.FunctionComponent<HomeGroupProps> = (props) => {
    const { group } = props

    const router = useRouter()

    const { data } = useQuery<UserQuery>(USER)

    const handleClick = () => {
        void router.push({
            pathname: '/home/groups/[groupId]',
            query: { groupId: group.id },
        })
    }

    return (
        <HomeGroupRoot onClick={handleClick}>
            <HomeGroupHeader>
                <HomeGroupTitle>
                    {group.name}
                </HomeGroupTitle>
                {group.author.id === data?.user?.id
                    ? (
                        <HomeGroupActions>
                            <HomeEditDialog group={group} />
                        </HomeGroupActions>
                    )
                    : null}
            </HomeGroupHeader>
            <HomeGroupAuthor>
                Author:
                {' '}
                {group.author.username}
            </HomeGroupAuthor>
        </HomeGroupRoot>
    )
}
