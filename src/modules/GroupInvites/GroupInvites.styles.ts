import styled from 'styled-components'

export const GroupInvitesUser = styled('div')((props) => ({
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    marginBottom: props.theme.spacing.md,
}))

export const GroupInvitesUserImage = styled('img')((props) => ({
    borderRadius: '50%',
    gridTemplateArea: 'image',
    marginRight: props.theme.spacing.md,
}))

export const GroupInvitesListItemDetails = styled('div')((props) => ({
    display: 'grid',
    gridTemplateAreas: `
        "image toUserUsername"
        "image       fromUser"
    `,
    gridTemplateColumns: '0.3fr 1fr',
    gridTemplateRows: '1fr 1fr',
}))

