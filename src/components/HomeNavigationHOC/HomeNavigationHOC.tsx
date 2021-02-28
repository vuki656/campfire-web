import {
    ExitIcon,
    ListIcon,
    StarOutlinedIcon,
} from '@dvukovic/dujo-ui'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'

import {
    HomeNavigationHOCList,
    HomeNavigationHOCRoot,
} from './HomeNavigationHOC.styles'
import { HomeNavigationHOCItem } from './HomeNavigationHOCItem'

export const HomeNavigationHOC: React.FunctionComponent = (props) => {
    const { children } = props

    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove('token')

        void router.push('/')
    }

    return (
        <HomeNavigationHOCRoot>
            <HomeNavigationHOCList>
                <HomeNavigationHOCItem
                    icon={<ListIcon />}
                    label="Campfires"
                    onClick={() => void router.push('/home')}
                    variant="blank"
                />
                <HomeNavigationHOCItem
                    icon={<StarOutlinedIcon />}
                    label="Favorites"
                    onClick={() => void router.push('/home/favorites')}
                    variant="blank"
                />
                <HomeNavigationHOCItem
                    icon={<ExitIcon />}
                    label="Log Out"
                    onClick={handleLogout}
                    variant="blank"
                />
            </HomeNavigationHOCList>
            {children}
        </HomeNavigationHOCRoot>

    )
}
