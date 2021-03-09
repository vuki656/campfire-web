import styled from 'styled-components'

export const HomeSectionRoot = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: `${props.theme.spacing.md} 0`,
}))

export const HomeSectionTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))
