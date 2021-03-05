import { useQuery } from '@apollo/client'
import React from 'react'

import { USER } from '../../../graphql/queries'
import type { UserQuery } from '../../../graphql/types'
import { HomeGroupsEditDialog } from '../HomeGroupsEditDialog'

import {
    HomeGroupsGroupActions,
    HomeGroupsGroupAuthor,
    HomeGroupsGroupHeader,
    HomeGroupsGroupRoot,
    HomeGroupsGroupTitle,
} from './HomeGroupsGroup.styles'
import type { HomeGroupsGroupProps } from './HomeGroupsGroup.types'

export const HomeGroupsGroup: React.FunctionComponent<HomeGroupsGroupProps> = (props) => {
    const { group } = props

    const { data } = useQuery<UserQuery>(USER)

    return (
        <HomeGroupsGroupRoot>
            <HomeGroupsGroupHeader>
                <HomeGroupsGroupTitle>
                    {group.name}
                </HomeGroupsGroupTitle>
                {group.author.id === data.user?.id
                    ? (
                        <HomeGroupsGroupActions>
                            <HomeGroupsEditDialog group={group} />
                        </HomeGroupsGroupActions>
                    )
                    : null}
            </HomeGroupsGroupHeader>
            <HomeGroupsGroupAuthor>
                Author:
                {' '}
                {group.author.username}
            </HomeGroupsGroupAuthor>
        </HomeGroupsGroupRoot>
    )
}
