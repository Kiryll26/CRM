import * as React from 'react'
import styled from 'styled-components'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useColorsState } from 'entities/themeSettings'
import { ChooseColorType } from 'shared/configs/theme/interface'

interface IconProps {
    mode: ChooseColorType
}

interface Props extends IconProps {
    title: string
    className?: string
}

export const ChooseColor = ({ title, mode, className }: Props) => {
    const { toggleColor, color } = useColorsState()
    const handleClick = () => toggleColor(mode)

    return (
        <ItemStyled onClick={handleClick} className={className}>
            <IconWrap mode={mode}>{mode === color ? <FontAwesomeIcon icon={faCheck} /> : null}</IconWrap>
            <span>{title}</span>
        </ItemStyled>
    )
}

const ItemStyled = styled.li`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.theme_colors.txtColor};
    cursor: pointer;
`

const IconWrap = styled.div<IconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background-color: ${({ theme, mode }) => theme.colors[mode]};
`
