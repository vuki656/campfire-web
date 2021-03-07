import { useQuery } from '@apollo/client'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import {
    GROUP,
    USER,
} from '../../graphql/queries'
import type {
    GroupQuery,
    GroupQueryVariables,
    UserQuery,
} from '../../graphql/types'

import {
    HomeNavHOCList,
    HomeNavHOCListItem,
    HomeNavHOCRoot,
    HomeNavHocSettings,
    HomeNavHocSubtitle,
} from './HomeNavHOC.styles'

export const HomeNavHOC: React.FunctionComponent = (props) => {
    const { children } = props

    const router = useRouter()

    const { data: userData } = useQuery<UserQuery>(USER)
    const { data: groupData } = useQuery<GroupQuery, GroupQueryVariables>(GROUP, {
        fetchPolicy: 'network-only',
        variables: {
            args: {
                groupId: router.query.groupId as string,
            },
        },
    })

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
                {userData?.user.id === groupData?.group.author.id
                    ? (
                        <HomeNavHocSettings>
                            <HomeNavHocSubtitle>
                                Campfire Settings
                            </HomeNavHocSubtitle>
                            <HomeNavHOCListItem
                                onClick={() => void router.push({
                                    pathname: '/home/groups/[groupId]/members',
                                    query: {
                                        groupId: router.query.groupId as string,
                                    },
                                })}
                                startIcon={(
                                    <Image
                                        height={iconSize.height}
                                        quality={100}
                                        src="/icons/people.svg"
                                        width={iconSize.width}
                                    />
                                )}
                                variant="blank"
                            >
                                Members
                            </HomeNavHOCListItem>
                            <HomeNavHOCListItem
                                onClick={() => void router.push({
                                    pathname: '/home/groups/[groupId]/invites',
                                    query: {
                                        groupId: router.query.groupId as string,
                                    },
                                })}
                                startIcon={(
                                    <Image
                                        height={iconSize.height}
                                        quality={100}
                                        src="/icons/invite.svg"
                                        width={iconSize.width}
                                    />
                                )}
                                variant="blank"
                            >
                                Invites
                            </HomeNavHOCListItem>
                            <HomeNavHOCListItem
                                onClick={() => void router.push({
                                    pathname: '/home/groups/[groupId]/settings',
                                    query: {
                                        groupId: router.query.groupId as string,
                                    },
                                })}
                                startIcon={(
                                    <Image
                                        height={iconSize.height}
                                        quality={100}
                                        src="/icons/cog.svg"
                                        width={iconSize.width}
                                    />
                                )}
                                variant="blank"
                            >
                                Settings
                            </HomeNavHOCListItem>
                        </HomeNavHocSettings>
                    )
                    : null}
            </HomeNavHOCList>
            {children}
        </HomeNavHOCRoot>
    )
}
