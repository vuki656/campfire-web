import styled from 'styled-components'

export const GroupPostRoot = styled('div')((props) => ({
    borderBottom: `1px solid ${props.theme.palette.grey.light350}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: `${props.theme.spacing.md} 0`,
}))

export const GroupPostHeader = styled('div')((props) => ({
    display: 'grid',
    gridTemplateAreas: `
        "image username"
        "image     date"
    `,
    gridTemplateColumns: '0.05fr 0.95fr',
    marginBottom: props.theme.spacing.md,
}))

export const GroupPostAuthorImage = styled('img')((props) => ({
    borderRadius: '50%',
    gridArea: 'image',
    marginRight: props.theme.spacing.md,
}))

export const GroupPostAuthorUsername = styled('p')({
    fontWeight: 'bold',
    gridArea: 'username',
})

export const GroupPostDate = styled('div')((props) => ({
    color: props.theme.palette.grey.light200,
    fontSize: '13px',
    gridArea: 'date',
}))

export const GroupPostContent = styled('div')((props) => ({
    alignItems: 'flex-start',
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: props.theme.spacing.md,
}))

export const GroupPostDescription = styled('p')({})

export const GroupPostImage = styled('img')({
    maxHeight: '400px',
    maxWidth: '400px',
    objectFit: 'scale-down',
})
