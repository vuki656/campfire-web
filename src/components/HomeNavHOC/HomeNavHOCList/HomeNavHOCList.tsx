import React from 'react'

import {
    HomeNavHOCListChildren,
    HomeNavHOCListRoot,
    HomeNavHOCListTitle,
} from './HomeNavHOCList.styles'
import type { HomeNavHOCListProps } from './HomeNavHOCList.types'

export const HomeNavHOCList: React.FunctionComponent<HomeNavHOCListProps> = (props) => {
    const {
        children,
        disableSpacing = false,
        title,
    } = props

    return (
        <HomeNavHOCListRoot>
            <HomeNavHOCListTitle disableSpacing={disableSpacing}>
                {title}
            </HomeNavHOCListTitle>
            <HomeNavHOCListChildren>
                {children}
            </HomeNavHOCListChildren>
        </HomeNavHOCListRoot>
    )
}
