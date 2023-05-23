import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { useDrawerState } from 'entities/themeSettings'
import { Button } from 'shared/ui'
import styled from 'styled-components'

export const OpenDrawer = () => {
    const { toggleDrawer } = useDrawerState()

    return (
        <ButtonStyled onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faPalette} />
        </ButtonStyled>
    )
}

const ButtonStyled = styled(Button)`
    padding: 0;
    font-size: 20px;
    margin-left: 20px;
`
