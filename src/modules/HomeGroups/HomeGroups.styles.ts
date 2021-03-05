import styled from 'styled-components'

export const HomeGroupsRoot = styled('div')((props) => ({
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
