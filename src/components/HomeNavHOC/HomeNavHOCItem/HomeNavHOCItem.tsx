import { Button } from '@dvukovic/dujo-ui'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import type { HomeNavHOCListItemProps } from './HomeNavHOCItem.types'

export const HomeNavHOCListItem: React.FunctionComponent<HomeNavHOCListItemProps> = (props) => {
    const {
        iconName,
        label,
        linkPath,
        onClick,
    } = props

    const router = useRouter()

    const handleClick = () => {
        if (linkPath) {
            void router.push(linkPath)
        } else {
            onClick()
        }
    }

    return (
        <Button
            onClick={handleClick}
            startIcon={(
                <Image
                    height={20}
                    quality={100}
                    src={`/icons/${iconName}.svg`}
                    width={20}
                />
            )}
            variant="blank"
        >
            {label}
        </Button>
    )
}
