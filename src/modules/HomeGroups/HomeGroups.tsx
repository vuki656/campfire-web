import { useQuery } from '@apollo/client'
import React from 'react'

import { GROUPS } from '../../graphql/queries'
import type { GroupsQuery } from '../../graphql/types'

import {
    HomeGroupsHeader,
    HomeGroupsRoot,
    HomeGroupsSection,
    HomeGroupsTitle,
} from './HomeGroups.styles'
import { HomeGroupsAddDialog } from './HomeGroupsAddDialog'
import { HomeGroupsGroup } from './HomeGroupsGroup'

export const HomeGroups: React.FunctionComponent = () => {
    const { data } = useQuery<GroupsQuery>(GROUPS)

    return (
        <HomeGroupsRoot>
            <HomeGroupsHeader>
                <HomeGroupsTitle>
                    Campfires
                </HomeGroupsTitle>
                <HomeGroupsAddDialog />
            </HomeGroupsHeader>
            <HomeGroupsSection>
                {data?.userGroups
                    ? (
                        data?.userGroups.map((group) => {
                            return (
                                <HomeGroupsGroup
                                    group={group}
                                    key={group.id}
                                />
                            )
                        })
                    )
                    : (
                        <p>
                            Looks like you haven't created any campfires yet. Go make one dude.
                        </p>
                    )}
            </HomeGroupsSection>
            <HomeGroupsHeader>
                <HomeGroupsTitle>
                    Joined Campfires
                </HomeGroupsTitle>
            </HomeGroupsHeader>
            <HomeGroupsSection>
                {data?.userGroups
                    ? (
                        data?.userJoinedGroups.map((group) => {
                            return (
                                <HomeGroupsGroup
                                    group={group}
                                    key={group.id}
                                />
                            )
                        })
                    )
                    : (
                        <p>
                            You haven't joined any campfires.
                        </p>
                    )}
            </HomeGroupsSection>
        </HomeGroupsRoot>
    )
}
