import type { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { HomeNavHOC } from '../../../../components/HomeNavHOC'
import { NavigationBar } from '../../../../components/NavigationBar'
import { Group } from '../../../../modules/Group'

const GroupPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Home
                </title>
            </NextHead>
            <NavigationBar />
            <HomeNavHOC>
                <Group />
            </HomeNavHOC>
        </>
    )
}

export default GroupPage
