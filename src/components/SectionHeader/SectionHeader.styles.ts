import styled from 'styled-components'

export const SectionHeaderRoot = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: props.theme.spacing.md,
}))

export const SectionHeaderTopSection = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})

export const SectionHeaderActions = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
})

export const SectionHeaderTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))
