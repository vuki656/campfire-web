import { useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import * as React from 'react'

import { VERIFY_USER } from '../../graphql/queries'
import type { VerifyUserQuery } from '../../graphql/types'
import { useCookies } from '../../lib/useCookies'

export const Authentication: React.FunctionComponent = (props) => {
    const { children } = props

    const router = useRouter()
    const cookies = useCookies()

    const clearUser = () => {
        cookies.actions.removeAll()

        void router.push('/')
    }

    const [verifyUser] = useLazyQuery<VerifyUserQuery>(
        VERIFY_USER,
        {
            fetchPolicy: 'network-only',
            onCompleted: (response) => {
                if (!response?.verifyUser.isValid) {
                    clearUser()
                }
            },
            onError: () => {
                clearUser()
            },
        }
    )

    React.useEffect(() => {
        verifyUser()
    }, [])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    )
}
