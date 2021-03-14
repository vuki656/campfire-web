import styled from 'styled-components'

export const HomeSectionRoot = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: props.theme.spacing.md,
}))

export const HomeSectionTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))
