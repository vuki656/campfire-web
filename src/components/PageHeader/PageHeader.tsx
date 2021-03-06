import React from 'react'

import {
    PageHeaderActions,
    PageHeaderRoot,
    PageHeaderTitle,
    PageHeaderTopSection,
} from './PageHeader.styles'
import type { PageHeaderProps } from './PageHeader.types'

export const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    const { actions, children, title } = props

    return (
        <PageHeaderRoot>
            <PageHeaderTopSection>
                <PageHeaderTitle>
                    {title}
                </PageHeaderTitle>
                {actions
                    ? (
                        <PageHeaderActions>
                            {actions}
                        </PageHeaderActions>
                    )
                    : null}
            </PageHeaderTopSection>
            {children}
        </PageHeaderRoot>
    )
}
