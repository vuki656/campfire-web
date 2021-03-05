import { Button } from '@dvukovic/dujo-ui'
import styled from 'styled-components'

export const HomeNavHOCRoot = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '0.2fr auto',
    margin: '0 auto',
    maxWidth: '1100px',
    paddingTop: props.theme.spacing.lg,
}))

export const HomeNavHOCList = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: props.theme.spacing.xs,
}))

export const HomeNavHOCListItem = styled(Button)((props) => ({
    color: '#6e6d7a',
}))
