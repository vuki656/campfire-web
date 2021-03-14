export type CookiesType = {
}

export type UseCookiesActionsType = {
    removeAll(): void
    setUserId(value: string): void
    setToken(value: string): void
    removeOne(value: string): void
}

export type UseCookiesValue = {
    token: string
    userId: string
    actions: UseCookiesActionsType
}

export enum CookiesEnum {
    TOKEN = 'token',
    USER_ID = 'userId'
}
