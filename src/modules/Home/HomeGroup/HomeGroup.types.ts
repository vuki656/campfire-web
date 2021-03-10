export type GroupType = {
    id: string
    name: string
    author?: {
        id: string
        username: string
        imageURL: string
    } | null
}

export type HomeGroupProps = {
    group: GroupType
}
