import styled from 'styled-components'

export const HomeGroupsRoot = styled('div')((props) => ({
    padding: `0 ${props.theme.spacing.md}`,
    width: '100%',
}))

export const HomeGroupsHeader = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}))

export const HomeGroupsTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))

export const HomeGroupsSection = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: `${props.theme.spacing.md} 0`,
}))
