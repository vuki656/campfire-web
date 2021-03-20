import { useQuery } from '@apollo/client'
import Image from 'next/image'
import React from 'react'

import { USER } from '../../graphql/queries/User'
import type { UserQuery } from '../../graphql/types'

import {
    NavigationBarLogoTitle,
    NavigationBarRoot,
    NavigationBarTitle,
    NavigationBarUser,
    NavigationBarUserImage,
} from './NavigationBar.styles'

export const NavigationBar: React.FunctionComponent = () => {
    const { data } = useQuery<UserQuery>(USER)

    return (
        <NavigationBarRoot>
            <NavigationBarTitle>
                <Image
                    height={35}
                    src="/icons/logo.svg"
                    width={35}
                />
                <NavigationBarLogoTitle>
                    Campfire
                </NavigationBarLogoTitle>
            </NavigationBarTitle>
            <NavigationBarUser>
                <p>
                    {data?.user?.username}
                </p>
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
