export type GroupType = {
    id: string
    name: string
    author: {
        id: string
        username: string
        imageURL: string
    }
}

export type HomeGroupsGroupProps = {
    group: GroupType
}
