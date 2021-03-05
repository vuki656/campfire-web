import styled from 'styled-components'

export const HomeGroupsGroupActions = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
})

export const HomeGroupsGroupRoot = styled('div')((props) => ({
    ':hover': {
        [HomeGroupsGroupActions]: { opacity: 1 },
    },
    [HomeGroupsGroupActions]: { opacity: 0 },
    border: `1px solid ${props.theme.palette.grey.light300}`,
    borderRadius: '7px',
    cursor: 'pointer',
    marginBottom: props.theme.spacing.md,
    padding: props.theme.spacing.md,
}))

export const HomeGroupsGroupHeader = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})

export const HomeGroupsGroupTitle = styled('p')((props) => ({
    ...props.theme.typography.subtitle,
    fontSize: '20px',
    marginRight: props.theme.spacing.sm,
}))

export const HomeGroupsGroupAuthor = styled('p')((props) => ({
    paddingTop: props.theme.spacing.sm,
}))
