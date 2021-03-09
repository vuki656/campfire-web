import React from 'react'

import {
    SectionHeaderActions,
    SectionHeaderRoot,
    SectionHeaderTitle,
    SectionHeaderTopSection,
} from './SectionHeader.styles'
import type { SectionHeaderProps } from './SectionHeader.types'

export const SectionHeader: React.FunctionComponent<SectionHeaderProps> = (props) => {
    const {
        actions,
        children,
        title,
    } = props

    return (
        <SectionHeaderRoot>
            <SectionHeaderTopSection>
                <SectionHeaderTitle>
                    {title}
                </SectionHeaderTitle>
                {actions
                    ? (
                        <SectionHeaderActions>
                            {actions}
                        </SectionHeaderActions>
                    )
                    : null}
            </SectionHeaderTopSection>
            {children}
        </SectionHeaderRoot>
    )
}
