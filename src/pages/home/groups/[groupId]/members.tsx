import type { NextPage } from 'next'
import NextHead from 'next/head'
import React from 'react'

import { HomeNavHOC } from '../../../../components/HomeNavHOC'
import { NavigationBar } from '../../../../components/NavigationBar'
import { GroupMembers } from '../../../../modules/GroupMembers'

const GroupMembersPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Members
                </title>
            </NextHead>
            <NavigationBar />
            <HomeNavHOC>
                <GroupMembers />
            </HomeNavHOC>
        </>
    )
}

export default GroupMembersPage
