import { useQuery } from '@apollo/client'
import React from 'react'

import { GROUPS } from '../../graphql/queries'
import type { GroupsQuery } from '../../graphql/types'

import {
    HomeHeader,
    HomeRoot,
    HomeSection,
    HomeTitle,
} from './Home.styles'
import { HomeAddDialog } from './HomeAddDialog'
import { HomeGroup } from './HomeGroup'

export const Home: React.FunctionComponent = () => {
    const { data } = useQuery<GroupsQuery>(GROUPS)

    return (
        <HomeRoot>
            <HomeHeader>
                <HomeTitle>
                    Campfires
                </HomeTitle>
                <HomeAddDialog />
            </HomeHeader>
            <HomeSection>
                {data?.userGroups
                    ? (
                        data?.userGroups.map((group) => {
                            return (
                                <HomeGroup
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
            </HomeSection>
            <HomeHeader>
                <HomeTitle>
                    Joined Campfires
                </HomeTitle>
            </HomeHeader>
            <HomeSection>
                {data?.userGroups
                    ? (
                        data?.userJoinedGroups.map((group) => {
                            return (
                                <HomeGroup
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
            </HomeSection>
        </HomeRoot>
    )
}
