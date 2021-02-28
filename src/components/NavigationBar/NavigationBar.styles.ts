import { IconButton } from '@dvukovic/dujo-ui'
import styled from 'styled-components'

export const NavigationBarRoot = styled('div')((props) => ({
    alignItems: 'center',
    borderBottom: `1px solid ${props.theme.palette.grey.light400}`,
    display: 'flex',
    height: '60px',
    justifyContent: 'space-between',
    padding: `${props.theme.spacing.md} ${props.theme.spacing.sm}`,
}))

export const NavigationBarTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))

export const NavigationBarUser = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
}))

export const NavigationBarUserName = styled('p')({
    fontWeight: 'bold',
})

export const NavigationBarUserImage = styled('img')({
    borderRadius: '50%',
    margin: '0 20px',
})

export const NavigationBarLogoutButton = styled(IconButton)((props) => ({
    padding: props.theme.spacing.xs,
}))
