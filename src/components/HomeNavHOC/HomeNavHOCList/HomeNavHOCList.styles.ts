import styled from 'styled-components'

import type { HomeNavHOCListProps } from './HomeNavHOCList.types'

type HomeNavHOCListTitleProps = Pick<HomeNavHOCListProps, 'disableSpacing'>

export const HomeNavHOCListRoot = styled('div')((props) => ({
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-st art',
}))

export const HomeNavHOCListTitle = styled('p')<HomeNavHOCListTitleProps>((props) => ({
    color: props.theme.palette.black,
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: props.theme.spacing.xs,
    marginTop: props.disableSpacing ? 0 : props.theme.spacing.def,
}))

export const HomeNavHOCListChildren = styled('div')((props) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: props.theme.spacing.xs,
}))
