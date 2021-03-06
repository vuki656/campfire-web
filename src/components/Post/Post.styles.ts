import styled from 'styled-components'

export const PostRoot = styled('div')((props) => ({
    borderBottom: `1px solid ${props.theme.palette.grey.light350}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: `${props.theme.spacing.md} 0`,
}))

export const PostHeader = styled('div')((props) => ({
    display: 'grid',
    gridTemplateAreas: `
        "image username"
        "image     date"
    `,
    gridTemplateColumns: '0.05fr 0.95fr',
    marginBottom: props.theme.spacing.md,
}))

export const PostAuthorImage = styled('img')((props) => ({
    borderRadius: '50%',
    gridArea: 'image',
    marginRight: props.theme.spacing.md,
}))

export const PostAuthorUsername = styled('p')({
    fontWeight: 'bold',
    gridArea: 'username',
})

export const PostDate = styled('div')((props) => ({
    color: props.theme.palette.grey.light200,
    fontSize: '13px',
    gridArea: 'date',
}))

export const PostContent = styled('div')((props) => ({
    alignItems: 'flex-start',
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: props.theme.spacing.md,
}))

export const PostActions = styled('div')((props) => ({
    columnGap: props.theme.spacing.sm,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 150px)',
    gridTemplateRows: '1fr',
}))

export const PostDescription = styled('p')({})

export const PostImage = styled('img')({
    maxHeight: '400px',
    maxWidth: '400px',
    objectFit: 'scale-down',
})
