import * as React from 'react'
import styled from 'styled-components'

import { colorsConfig } from 'shared/configs/themeSettings'
import { ChooseColor, ThemeSwitch } from 'features/themeSettings'

export const ThemeSettings = () => {
    return (
        <ThemeMenu>
            <SelectWrapStyled>
                <TitleStyled>Choose theme</TitleStyled>
                <ThemeSwitch />
            </SelectWrapStyled>
            <SelectWrapStyled>
                <TitleStyled>Choose color</TitleStyled>
                <ul>
                    {colorsConfig.map(({ title, color }, index) => (
                        <ChooseColorStyled key={`choose-${color}-${index}`} title={title} mode={color} />
                    ))}
                </ul>
            </SelectWrapStyled>
        </ThemeMenu>
    )
}

const ThemeMenu = styled.div`
    padding: 20px;
    min-width: 250px;
`

const ChooseColorStyled = styled(ChooseColor)`
    & ~ li {
        margin-top: 10px;
    }
`

const SelectWrapStyled = styled.div`
    margin-top: 30px;
    &:first-child {
        margin-top: 0;
    }
`

const TitleStyled = styled.span`
    display: block;
    margin-bottom: 20px;
`
