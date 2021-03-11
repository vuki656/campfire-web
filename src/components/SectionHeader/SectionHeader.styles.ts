import styled from 'styled-components'

import type { SectionHeaderProps } from './SectionHeader.types'

type SectionHeaderRootProps = Pick<SectionHeaderProps, 'topSpacing'>

export const SectionHeaderRoot = styled('div')<SectionHeaderRootProps>((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: props.theme.spacing.md,
    marginTop: props.topSpacing ? props.theme.spacing.xl : 0,
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
