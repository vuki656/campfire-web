import React from 'react'

import {
    HomeGroupsHeader,
    HomeGroupsRoot,
    HomeGroupsTitle,
} from './HomeGroups.styles'
import { HomeGroupsAddDialog } from './HomeGroupsAddDialog'

export const HomeGroups: React.FunctionComponent = () => {
    return (
        <HomeGroupsRoot>
            <HomeGroupsHeader>
                <HomeGroupsTitle>
                    Campfires
                </HomeGroupsTitle>
                <HomeGroupsAddDialog />
            </HomeGroupsHeader>
        </HomeGroupsRoot>
    )
}
