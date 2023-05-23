import * as React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from 'shared/ui'
import { routesConfig } from 'shared/configs/navbar'

export const Navbar = () => {
    return (
        <NavStyled>
            {routesConfig.map((route) => (
                <Button key={route.path} render={NavLink} to={route.path}>
                    <IconStyled icon={route.icon} />
                    {route.name}
                </Button>
            ))}
        </NavStyled>
    )
}

const IconStyled = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    margin-right: 10px;
`

const NavStyled = styled.nav`
    padding: 20px;
`
