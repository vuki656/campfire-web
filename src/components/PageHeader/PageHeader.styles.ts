import styled from 'styled-components'

export const PageHeaderRoot = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: props.theme.spacing.md,
}))

export const PageHeaderTopSection = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})

export const PageHeaderActions = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
})

export const PageHeaderTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))
