import { Button } from '@dvukovic/dujo-ui'
import styled from 'styled-components'

export const HomeNavHOCRoot = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '200px auto',
    margin: '0 auto',
    maxWidth: '1100px',
    paddingTop: props.theme.spacing.lg,
}))

export const HomeNavHOCList = styled('div')((props) => ({}))

export const HomeNavHOCListItem = styled(Button)((props) => ({
    color: '#6e6d7a',
    marginBottom: props.theme.spacing.xs,
}))

export const HomeNavHocSettings = styled('div')((props) => ({
    marginTop: props.theme.spacing.lg,
}))

export const HomeNavHocSubtitle = styled('div')((props) => ({
    color: props.theme.palette.black,
    fontSize: '17px',
    fontWeight: 'bold',
    marginBottom: props.theme.spacing.def,
}))
