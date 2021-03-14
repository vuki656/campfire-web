import styled from 'styled-components'

import type { UserInviteProps } from './UserInvite.types'

type UserInviteRootProps = Pick<UserInviteProps, 'message'>

export const UserInviteRoot = styled('div')<UserInviteRootProps>((props) => ({
    alignItems: 'center',
    display: 'grid',
    gridTemplateAreas: `
        "image username actions"
        "image ${props.message ? 'message' : 'username'} actions"
    `,
    gridTemplateColumns: 'auto 1fr auto',
    marginBottom: props.theme.spacing.md,
}))

export const UserInviteImage = styled('img')((props) => ({
    borderRadius: '50%',
    gridArea: 'image',
    marginRight: props.theme.spacing.md,
}))

export const UserInviteUsername = styled('p')({
    fontSize: '23px',
    gridArea: 'username',
})

export const UserInviteMessage = styled('p')({
    gridArea: 'message',
})

export const UserInviteActions = styled('div')((props) => ({
    columnGap: props.theme.spacing.xs,
    display: 'grid',
    gridArea: 'actions',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr',
}))
