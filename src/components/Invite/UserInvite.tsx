import React from 'react'

import type { UserInviteProps } from '.'

import {
    UserInviteActions,
    UserInviteImage,
    UserInviteMessage,
    UserInviteRoot,
    UserInviteUsername,
} from './UserInvite.styles'

export const Invite: React.FunctionComponent<UserInviteProps> = (props) => {
    const { action, message, user } = props

    return (
        <UserInviteRoot message={message}>
            <UserInviteImage
                height={50}
                src={user.imageURL}
                width={50}
            />
            <UserInviteUsername>
                {user.username}
            </UserInviteUsername>
            {message
                ? (
                    <UserInviteMessage>
                        {message}
                    </UserInviteMessage>
                )
                : null}
            <UserInviteActions>
                {action}
            </UserInviteActions>
        </UserInviteRoot>
    )
}
