import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { HomeNavigationHOC } from '../../components/HomeNavigationHOC'
import { NavigationBar } from '../../components/NavigationBar'
import { HomeGroups } from '../../modules/HomeGroups'

const HomePage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Home
                </title>
            </NextHead>
            <NavigationBar />
            <HomeNavigationHOC>
                <HomeGroups />
            </HomeNavigationHOC>
        </>
    )
}

export default HomePage
