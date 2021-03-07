import styled from 'styled-components'

export const InvitesUser = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: props.theme.spacing.md,
}))

export const InvitesUserImage = styled('img')((props) => ({
    borderRadius: '50%',
    gridTemplateArea: 'image',
    marginRight: props.theme.spacing.md,
}))

export const InvitesUserDetails = styled('div')({
    alignItems: 'center',
    display: 'flex',
})

export const InvitesListItemDetails = styled('div')((props) => ({
    display: 'grid',
    gridTemplateAreas: `
        "image toUserUsername"
        "image       fromUser"
    `,
    gridTemplateColumns: '0.3fr 1fr',
    gridTemplateRows: '1fr 1fr',
}))

export const InvitesToUsername = styled('div')((props) => ({
    gridTemplateArea: 'toUserUsername',
}))

export const InvitesFromUser = styled('div')((props) => ({
    gridTemplateArea: 'fromUser',
}))
