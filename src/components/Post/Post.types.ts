export type PostType = {
    id: string
    description?: string
    link: string
    createdAt: string
    title?: string
    imageLink?: string
    faviconLink?: string
    favoritedBy?: {
      userId: string
    }[] | null
    siteName?: string
    author: {
        id: string
        username: string
        imageURL: string
    }
}

export type PostProps = {
    post: PostType
}
