import { ApolloProvider } from '@apollo/client'
import {
    createTheme,
    GlobalStyles,
    ThemeProvider,
} from '@dvukovic/dujo-ui'
import type { AppProps } from 'next/app'
import NextApp from 'next/app'
import React from 'react'

import { Authentication } from '../components/Authentication'
import { useApolloClient } from '../lib/useApolloClient'

const App = (props: AppProps): JSX.Element => {
    const {
        Component,
        pageProps,
    } = props

    const theme = createTheme()
    const client = useApolloClient(pageProps.initialApolloState)

    return (
        <ApolloProvider client={client}>
            <Authentication>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Authentication>
        </ApolloProvider>
    )
}

class Root extends NextApp {

    // eslint-disable-next-line require-await, @typescript-eslint/require-await
    static async getInitialProps() {
        return { pageProps: {} }
    }

    public render(): JSX.Element {
        return (
            <App {...this.props} />
        )
    }

}

export default Root
