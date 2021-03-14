import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { HomeNavHOC } from '../../components/HomeNavHOC'
import { NavigationBar } from '../../components/NavigationBar'

const UserInvitesPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    User Invites
                </title>
            </NextHead>
            <NavigationBar />
            <HomeNavHOC>
                {/* <UserInvites /> */}
            </HomeNavHOC>
        </>
    )
}

export default UserInvitesPage
