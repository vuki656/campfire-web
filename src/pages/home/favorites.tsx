import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { HomeNavigationHOC } from '../../components/HomeNavigationHOC'
import { NavigationBar } from '../../components/NavigationBar'
import { Favorites } from '../../modules/Favorites'

const FavoritesPage: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>
                    Home
                </title>
            </NextHead>
            <NavigationBar />
            <HomeNavigationHOC>
                <Favorites />
            </HomeNavigationHOC>
        </>
    )
}

export default FavoritesPage
