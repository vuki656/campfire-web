import { SectionHeader } from '../../../components/SectionHeader'
import { HomeGroup } from '../HomeGroup'

import { HomeSectionRoot } from './HomeSection.styles'
import type { HomeSectionProps } from './HomeSection.types'

export const HomeSection: React.FunctionComponent<HomeSectionProps> = (props) => {
    const {
        actions,
        fallbackText,
        groups,
        title,
    } = props

    return (
        <HomeSectionRoot>
            <SectionHeader
                actions={actions}
                title={title}
            />
            {groups?.length
                ? groups.map((group) => {
                    return (
                        <HomeGroup
                            group={group}
                            key={group.id}
                        />
                    )
                })
                : (
                    <p>
                        {fallbackText}
                    </p>
                )}
        </HomeSectionRoot>
    )
}
