import type { GroupType } from '../HomeGroup'

export type HomeSectionProps = {
    title: string
    groups: GroupType[]
    fallbackText: string
    actions?: React.ReactElement
}
