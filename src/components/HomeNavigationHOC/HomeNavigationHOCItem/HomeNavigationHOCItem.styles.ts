import { Button } from '@dvukovic/dujo-ui'
import styled from 'styled-components'

export const HomeNavigationItemRoot = styled(Button)({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
})

export const HomeNavigationItemLabel = styled('p')((props) => ({
    fontWeight: 'bold',
    marginLeft: props.theme.spacing.sm,
}))
