import {Button} from '@dvukovic/dujo-ui'
import styled from 'styled-components'

export const GroupMember = styled('div')((props) => ({
    alignItems: 'center',
    display: 'grid',
    gridTemplateAreas: `
        "image username actions"
    `,
    gridTemplateColumns: 'auto 1fr auto',
    marginBottom: props.theme.spacing.md,
}))

export const GroupMemberImage = styled('img')((props) => ({
    borderRadius: '50%',
    gridArea: 'image',
    marginRight: props.theme.spacing.md,
}))

export const GroupMemberUsername = styled('p')({
    fontSize: '23px',
    gridArea: 'username',
})

export const GroupMemberAction = styled(Button)({
    gridArea: 'actions',
})
