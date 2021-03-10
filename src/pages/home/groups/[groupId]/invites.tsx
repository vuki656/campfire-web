import type { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { HomeNavHOC } from '../../../../components/HomeNavHOC'
import { NavigationBar } from '../../../../components/NavigationBar'

const InvitesPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Invites
                </title>
            </NextHead>
            <NavigationBar />
            <HomeNavHOC>
                {/* <Invites /> */}
            </HomeNavHOC>
        </>
    )
}

export default InvitesPage
