import {
    useApolloClient,
    useLazyQuery,
} from '@apollo/client'
import { useRouter } from 'next/router'
import * as React from 'react'

import { VERIFY_USER } from '../../graphql/queries'
import type {
    VerifyUserQuery,
    VerifyUserQueryVariables,
} from '../../graphql/types'
import { useCookies } from '../../lib/useCookies'

const unAuthorizedPaths = ['/']

export const Authentication: React.FunctionComponent = (props) => {
    const { children } = props

    const cookies = useCookies()
    const apollo = useApolloClient()
    const router = useRouter()

    const [verifyUser] = useLazyQuery<VerifyUserQuery, VerifyUserQueryVariables>(
        VERIFY_USER,
        {
            fetchPolicy: 'network-only',
            onCompleted: async (response) => {
                const isUserAuthenticated = response.verifyUser.isValid

                if (!isUserAuthenticated){
                    cookies.actions.removeAll()

                    await apollo.clearStore()
                    await router.push('/')
                }
            },
        }
    )

    React.useEffect(() => {
        const ssr = typeof window === undefined
        const authorizedPageLoaded = !unAuthorizedPaths.includes(router.route)

        if (!ssr && authorizedPageLoaded) {
            verifyUser()
        }
    }, [router.route])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    )
}
