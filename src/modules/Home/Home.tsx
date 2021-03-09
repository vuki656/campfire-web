import { useQuery } from '@apollo/client'
import React from 'react'

import { GROUPS } from '../../graphql/queries'
import type { GroupsQuery } from '../../graphql/types'

import { HomeRoot } from './Home.styles'
import { HomeAddDialog } from './HomeAddDialog'
import { HomeSection } from './HomeSection'

export const Home: React.FunctionComponent = () => {
    const { data } = useQuery<GroupsQuery>(GROUPS)

    return (
        <HomeRoot>
            <HomeSection
                actions={<HomeAddDialog />}
                fallbackText="Looks like you haven't created any campfires yet. Why not make one."
                groups={data?.userCreatedGroups}
                title="Your Campfires"
            />
            <HomeSection
                fallbackText="You haven't joined any campfires yet."
                groups={data?.userJoinedGroups}
                title="Your Campfires"
            />
        </HomeRoot>
    )
}
