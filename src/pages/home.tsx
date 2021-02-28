import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { NavigationBar } from '../components/NavigationBar'
import { Home } from '../modules/Home'

const HomePage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Home
                </title>
            </NextHead>
            <NavigationBar />
            <Home />
        </>
    )
}

export default HomePage
