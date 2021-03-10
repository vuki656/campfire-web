import { useRouter } from 'next/router'
import React from 'react'

import { useCookies } from '../../../lib/useCookies'
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
    const cookies = useCookies()

    const handleClick = () => {
        void router.push({
            pathname: '/home/groups/[groupId]',
            query: { groupId: group.id },
        })
    }

    const isUserGroupOwner = group?.author?.id === cookies.userId

    return (
        <HomeGroupRoot onClick={handleClick}>
            <HomeGroupHeader>
                <HomeGroupTitle>
                    {group.name}
                </HomeGroupTitle>
                {isUserGroupOwner
                    ? (
                        <HomeGroupActions>
                            <HomeEditDialog group={group} />
                        </HomeGroupActions>
                    )
                    : null}
            </HomeGroupHeader>
            <HomeGroupAuthor>
                Created by:
                {' '}
                {group?.author?.username}
            </HomeGroupAuthor>
        </HomeGroupRoot>
    )
}
