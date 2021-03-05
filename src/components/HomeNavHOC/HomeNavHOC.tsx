import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import {
    HomeNavHOCList,
    HomeNavHOCListItem,
    HomeNavHOCRoot,
} from './HomeNavHOC.styles'

export const HomeNavHOC: React.FunctionComponent = (props) => {
    const { children } = props

    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove('token')

        void router.push('/')
    }

    const iconSize = { height: 20, width: 20 }

    return (
        <HomeNavHOCRoot>
            <HomeNavHOCList>
                <HomeNavHOCListItem
                    onClick={() => void router.push('/home')}
                    startIcon={(
                        <Image
                            height={iconSize.height}
                            quality={100}
                            src="/icons/list.svg"
                            width={iconSize.width}
                        />
                    )}
                    variant="blank"
                >
                    Campfires
                </HomeNavHOCListItem>
                <HomeNavHOCListItem
                    onClick={() => void router.push('/home/favorites')}
                    startIcon={(
                        <Image
                            height={iconSize.height}
                            quality={100}
                            src="/icons/star.svg"
                            width={iconSize.width}
                        />
                    )}
                    variant="blank"
                >
                    Favorites
                </HomeNavHOCListItem>
                <HomeNavHOCListItem
                    onClick={handleLogout}
                    startIcon={(
                        <Image
                            height={iconSize.height}
                            quality={100}
                            src="/icons/logout.svg"
                            width={iconSize.width}
                        />
                    )}
                    variant="blank"
                >
                    Log Out
                </HomeNavHOCListItem>
            </HomeNavHOCList>
            {children}
        </HomeNavHOCRoot>
    )
}
