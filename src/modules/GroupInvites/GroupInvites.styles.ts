import styled from 'styled-components'

export const GroupInvitesUser = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: props.theme.spacing.md,
}))

export const GroupInvitesUserImage = styled('img')((props) => ({
    borderRadius: '50%',
    gridTemplateArea: 'image',
    marginRight: props.theme.spacing.md,
}))

export const GroupInvitesUserDetails = styled('div')({
    alignItems: 'center',
    display: 'flex',
})

export const GroupInvitesListItemDetails = styled('div')((props) => ({
    display: 'grid',
    gridTemplateAreas: `
        "image toUserUsername"
        "image       fromUser"
    `,
    gridTemplateColumns: '0.3fr 1fr',
    gridTemplateRows: '1fr 1fr',
}))

export const GroupInvitesToUsername = styled('div')((props) => ({
    gridTemplateArea: 'toUserUsername',
}))

export const InvitesFromUser = styled('div')((props) => ({
    gridTemplateArea: 'fromUser',
}))
