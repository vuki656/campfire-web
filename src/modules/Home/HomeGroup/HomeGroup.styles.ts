import styled from 'styled-components'

export const HomeGroupActions = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
})

export const HomeGroupRoot = styled('div')((props) => ({
    ':hover': {
        [HomeGroupActions]: { opacity: 1 },
        backgroundColor: props.theme.palette.grey.light500,
    },
    [HomeGroupActions]: { opacity: 0 },
    border: `1px solid ${props.theme.palette.grey.light300}`,
    borderRadius: '7px',
    cursor: 'pointer',
    marginBottom: props.theme.spacing.md,
    padding: props.theme.spacing.md,
}))

export const HomeGroupHeader = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})

export const HomeGroupTitle = styled('p')((props) => ({
    ...props.theme.typography.subtitle,
    fontSize: '20px',
    marginRight: props.theme.spacing.sm,
}))

export const HomeGroupAuthor = styled('p')((props) => ({
    paddingTop: props.theme.spacing.sm,
}))
