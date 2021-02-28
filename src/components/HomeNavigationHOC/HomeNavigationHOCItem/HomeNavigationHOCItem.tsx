import React from 'react'

import {
    HomeNavigationItemLabel,
    HomeNavigationItemRoot,
} from './HomeNavigationHOCItem.styles'
import type { HomeNavigationHOCItemProps } from './HomeNavigationHOCItem.types'

export const HomeNavigationHOCItem: React.FunctionComponent<HomeNavigationHOCItemProps> = (props) => {
    const { icon, label, ...other } = props

    return (
        <HomeNavigationItemRoot {...other}>
            {icon}
            <HomeNavigationItemLabel>
                {label}
            </HomeNavigationItemLabel>
        </HomeNavigationItemRoot>
    )
}
