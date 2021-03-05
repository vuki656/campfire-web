import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { HomeNavHOC } from '../../components/HomeNavHOC'
import { NavigationBar } from '../../components/NavigationBar'
import { Home } from '../../modules/Home'

const HomePage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Home
                </title>
            </NextHead>
            <NavigationBar />
            <HomeNavHOC>
                <Home />
            </HomeNavHOC>
        </>
    )
}

export default HomePage
