import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

import {
    GROUP,
    USER_INVITES,
} from '../../graphql/queries'
import type {
    GroupQuery,
    GroupQueryVariables,
    UserInvitesQuery,
} from '../../graphql/types'
import { useCookies } from '../../lib/useCookies'

import {
    HomeNavHOCInviteAmount,
    HomeNavHOCRoot,
} from './HomeNavHOC.styles'
import { HomeNavHOCListItem } from './HomeNavHOCItem'
import { HomeNavHOCList } from './HomeNavHOCList'

export const HomeNavHOC: React.FunctionComponent = (props) => {
    const { children } = props

    const router = useRouter()
    const cookies = useCookies()

    const groupId = router.query.groupId as string

    const { data } = useQuery<GroupQuery, GroupQueryVariables>(GROUP, {
        fetchPolicy: 'network-only',
        skip: !groupId,
        variables: {
            args: {
                groupId: groupId,
            },
        },
    })

    const { data: userInvitesData } = useQuery<UserInvitesQuery>(USER_INVITES)

    const handleLogout = () => {
        cookies.actions.removeAll()

        void router.push('/')
    }

    const isUserGroupOwner = cookies.userId === data?.group?.author?.id
    const userInvitesNumber = userInvitesData?.userInvites.length

    console.log(isUserGroupOwner)

    return (
        <HomeNavHOCRoot>
            <div>
                <HomeNavHOCList
                    disableSpacing={true}
                    title="Menu"
                >
                    <HomeNavHOCListItem
                        iconName="bricks"
                        label="Campfires"
                        linkPath="/home"
                    />
                    <HomeNavHOCListItem
                        iconName="star"
                        label="Favorites"
                        linkPath="/home/favorites"
                    />
                    <HomeNavHOCListItem
                        iconName="letter"
                        label={(
                            <>
                                Invites
                                {' '}
                                {userInvitesNumber
                                    ? (
                                        <HomeNavHOCInviteAmount>
                                            {userInvitesNumber}
                                        </HomeNavHOCInviteAmount>
                                    )
                                    : null}
                            </>
                        )}
                        linkPath="/home/invites"
                    />
                    <HomeNavHOCListItem
                        iconName="exit"
                        label="Log Out"
                        onClick={handleLogout}
                    />
                </HomeNavHOCList>
                {isUserGroupOwner
                    ? (
                        <HomeNavHOCList title="Settings">
                            <HomeNavHOCListItem
                                iconName="people"
                                label="Members"
                                onClick={() => void router.push({
                                    pathname: '/home/groups/[groupId]/members',
                                    query: {
                                        groupId: router.query.groupId as string,
                                    },
                                })}
                            />
                            <HomeNavHOCListItem
                                iconName="letter"
                                label="Invites"
                                onClick={() => void router.push({
                                    pathname: '/home/groups/[groupId]/invites',
                                    query: {
                                        groupId: router.query.groupId as string,
                                    },
                                })}
                            />
                            <HomeNavHOCListItem
                                iconName="cog"
                                label="Settings"
                                onClick={() => void router.push({
                                    pathname: '/home/groups/[groupId]/settings',
                                    query: {
                                        groupId: router.query.groupId as string,
                                    },
                                })}
                            />
                        </HomeNavHOCList>
                    )
                    : null}
            </div>
            {children}
        </HomeNavHOCRoot>
    )
}
