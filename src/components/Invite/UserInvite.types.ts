import type { UserType } from '../../graphql/types'

export type UserInviteProps = {
    action: React.ReactElement
    user: UserType
    message?: string
}
