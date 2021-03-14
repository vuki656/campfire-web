import styled from 'styled-components'

export const HomeNavHOCRoot = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '200px auto',
    margin: '0 auto',
    maxWidth: '1100px',
    paddingTop: props.theme.spacing.lg,
}))
