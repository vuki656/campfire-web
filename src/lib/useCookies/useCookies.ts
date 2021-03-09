import Cookies from 'js-cookie'

import type { CookiesType } from './useCookies.types'

export const useCookies = (): CookiesType => {
    const userId = Cookies.get('userId')
    const token = Cookies.get('token')

    return {
        token: token,
        userId: userId,
    }
}
