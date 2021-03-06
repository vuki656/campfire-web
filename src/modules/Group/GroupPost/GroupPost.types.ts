export type PostType = {
    id: string
    description?: string
    link: string
    createdAt: string
    title?: string
    imageLink?: string
    faviconLink?: string
    siteName?: string
    author: {
        id: string
        username: string
        imageURL: string
    }
}

export type GroupPostProps = {
    post: PostType
}
