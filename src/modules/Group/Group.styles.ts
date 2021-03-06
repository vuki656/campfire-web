import styled from 'styled-components'

export const GroupRoot = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
})

export const GroupHeader = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})

export const GroupTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))

export const GroupPosts = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: `${props.theme.spacing.md} 0`,
}))
