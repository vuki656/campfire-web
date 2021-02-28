import styled from 'styled-components'

export const NavigationBarRoot = styled('div')((props) => ({
    alignItems: 'center',
    borderBottom: `1px solid ${props.theme.palette.grey.light400}`,
    display: 'flex',
    height: '60px',
    justifyContent: 'space-between',
    padding: `${props.theme.spacing.md} ${props.theme.spacing.sm}`,
}))

export const NavigationBarTitle = styled('p')((props) => ({
    ...props.theme.typography.title,
}))

export const NavigationBarUser = styled('div')((props) => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
}))

export const NavigationBarUserName = styled('p')({
    fontWeight: 'bold',
    marginRight: '10px',
})

export const NavigationBarUserImage = styled('img')({
    border: '3px solid black',
    borderRadius: '50%',
})
