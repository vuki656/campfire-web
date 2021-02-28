import { useQuery } from '@apollo/client'
import { ExitIcon } from '@dvukovic/dujo-ui'
import Cookies from 'js-cookie'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { USER } from '../../graphql/queries/User'
import type { UserQuery } from '../../graphql/types'

import {
    NavigationBarLogoutButton,
    NavigationBarRoot,
    NavigationBarTitle,
    NavigationBarUser,
    NavigationBarUserImage,
    NavigationBarUserName,
} from './NavigationBar.styles'

export const NavigationBar: React.FunctionComponent = () => {
    const { data } = useQuery<UserQuery>(USER)

    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove('token')

        void router.push('/')
    }

    return (
        <NavigationBarRoot>
            <NavigationBarTitle>
                🔥 Campfire
            </NavigationBarTitle>
            <NavigationBarUser>
                <NavigationBarUserName>
                    {data?.user?.username}
                </NavigationBarUserName>
                {data?.user?.imageURL
                    ? (
                        <NavigationBarUserImage
                            height={40}
                            src={data?.user?.imageURL}
                            width={40}
                        />
                    )
                    : null}
                <NavigationBarLogoutButton
                    icon={<ExitIcon />}
                    onClick={handleLogout}
                    variant="outlined"
                />
            </NavigationBarUser>
        </NavigationBarRoot>
    )
}
