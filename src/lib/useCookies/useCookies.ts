import Cookies from 'js-cookie'

import type { UseCookiesValue } from './useCookies.types'
import { CookiesEnum } from './useCookies.types'

export const useCookies = (): UseCookiesValue => {
    const userId = Cookies.get(CookiesEnum.USER_ID)
    const token = Cookies.get(CookiesEnum.TOKEN)

    const setToken = (value: string) => {
        Cookies.set(CookiesEnum.TOKEN, value)
    }

    const setUserId = (value: string) => {
        Cookies.set(CookiesEnum.USER_ID, value)
    }

    const removeOne = (value: string) => {
        Cookies.remove(value)
    }

    const removeAll = () => {
        Object.values(CookiesEnum).forEach((cookie) => {
            removeOne(cookie)
        })
    }

    return {
        actions: {
            removeAll: removeAll,
            removeOne: removeOne,
            setToken: setToken,
            setUserId: setUserId,
        },
        token: token,
        userId: userId,
    }
}
