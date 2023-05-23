import * as React from 'react'
import styled from 'styled-components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Heading, Wrapper } from 'shared/ui'

interface Props {
    count: string
    title: string
    icon: IconProp
}

export const StatusCard = ({ icon, count, title }: Props) => {
    return (
        <Wrapper useHoverEffect={true}>
            <IconWrap>
                <FontAwesomeIcon icon={icon} />
            </IconWrap>
            <Info>
                <Heading tag={Heading.tag.h2}>{count}</Heading>
                <span>{title}</span>
            </Info>
        </Wrapper>
    )
}

const IconWrap = styled.div`
    width: 30%;
    height: 100%;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Info = styled.div`
    flex-grow: 1;
    text-align: center;
`
