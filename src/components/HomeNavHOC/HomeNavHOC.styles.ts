import styled from 'styled-components'

export const HomeNavHOCRoot = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '200px auto',
    margin: '0 auto',
    maxWidth: '1100px',
    paddingTop: props.theme.spacing.lg,
}))

export const HomeNavHOCInviteAmount = styled('p')((props) => ({
    backgroundColor: '#ffdd00',
    borderRadius: '20%',
    fontSize: '12px',
    marginLeft: props.theme.spacing.sm,
    padding: `${props.theme.spacing.xxs} ${props.theme.spacing.sm}`,
}))
