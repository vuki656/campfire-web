import styled from 'styled-components'

export const HomeNavigationHOCRoot = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '0.2fr auto',
    margin: '0 auto',
    maxWidth: '1100px',
    paddingTop: props.theme.spacing.lg,
}))

export const HomeNavigationHOCList = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: props.theme.spacing.xs,
}))
