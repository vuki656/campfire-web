import styled from 'styled-components'

export const GroupRoot = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
})

export const GroupPosts = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: `${props.theme.spacing.md} 0`,
}))
