export type PostType = {
    id: string
    description?: string | null
    link: string
    createdAt: string
    metadata?: {
        title?: string | null
        imageLink?: string | null
        siteName?: string | null
        faviconLink?: string | null
    } | null
    favoritedBy?: {
        userId: string
    }[] | null
    author: {
        id: string
        username: string
        imageURL: string
    }
}

export type PostProps = {
    post: PostType
}
