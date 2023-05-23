import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import styled from 'styled-components'

interface Props {
    title: string
}

export const UserCard = ({ title }: Props) => {
    return (
        <Wrap>
            <FontAwesomeIcon icon={faUser} />
            <Title>{title}</Title>
        </Wrap>
    )
}

const Title = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
`
