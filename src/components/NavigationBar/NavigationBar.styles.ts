import styled from 'styled-components'

export const NavigationBarRoot = styled('div')((props) => ({
    alignItems: 'center',
    borderBottom: `1px solid ${props.theme.palette.grey.light400}`,
    display: 'flex',
    height: '60px',
    justifyContent: 'space-between',
    padding: `${props.theme.spacing.md} ${props.theme.spacing.lg}`,
}))

export const NavigationBarTitle = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '25px',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
}))

export const NavigationBarLogoTitle = styled('p')({
    marginLeft: '10px',
})

export const NavigationBarUser = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
}))

export const NavigationBarUserImage = styled('img')({
    borderRadius: '50%',
    marginLeft: '20px',
})
