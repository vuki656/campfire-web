import { Button } from '@dvukovic/dujo-ui'
import styled from 'styled-components'

export const LoginRoot = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
}))

export const LoginTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
    fontSize: '40px',
    marginBottom: props.theme.spacing.lg,
    marginTop: props.theme.spacing.sm,
    textAlign: 'center',
}))

export const LoginForm = styled('div')((props) => ({
    border: `1px solid ${props.theme.palette.grey.light300}`,
    borderRadius: '12px',
    padding: `${props.theme.spacing.xl} ${props.theme.spacing.lg}`,
    width: '400px',
}))

export const LoginButton = styled(Button)((props) => ({
    marginTop: props.theme.spacing.xl,
}))

export const LoginNote = styled('div')((props) => ({
    color: props.theme.palette.grey.light100,
    marginTop: props.theme.spacing.lg,
    textAlign: 'center',
}))
