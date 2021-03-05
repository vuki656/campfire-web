import type { NextPage } from 'next'
import NextHead from 'next/head'
import * as React from 'react'

import { HomeNavHOC } from '../../components/HomeNavHOC'
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
            <HomeNavHOC>
                <Favorites />
            </HomeNavHOC>
        </>
    )
}

export default FavoritesPage
