import styled from 'styled-components'

export const HomeRoot = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: `0 ${props.theme.spacing.md}`,
    width: '100%',
}))
