import { useQuery } from '@apollo/client'
import React from 'react'

import { USER } from '../../graphql/queries/User'
import type { UserQuery } from '../../graphql/types'

import {
    NavigationBarRoot,
    NavigationBarTitle,
    NavigationBarUser,
    NavigationBarUserImage,
    NavigationBarUserName,
} from './NavigationBar.styles'

export const NavigationBar: React.FunctionComponent = () => {
    const { data } = useQuery<UserQuery>(USER)

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
            </NavigationBarUser>
        </NavigationBarRoot>
    )
}
