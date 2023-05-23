import * as React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from 'shared/ui'
import { Dropdown } from 'shared/ui'
import { useLogout } from 'features/user'
import { UserCard, useUserState } from 'entities/user'
import { userMenuConfig } from 'shared/configs/topnav'

export const UserMenu = () => {
    const logout = useLogout()
    const userName = useUserState((state) => state.name)
    return (
        <Dropdown position={Dropdown.position.right} header={<UserCard title={userName} />}>
            {userMenuConfig.map((item, index) =>
                item.path === 'signin' ? (
                    <Button render={'a'} onClick={logout} key={`user-menu-${index}`}>
                        <IconStyled icon={item.icon} />
                        <span>{item.title}</span>
                    </Button>
                ) : (
                    <Button render={NavLink} to={item.path} key={`user-menu-${index}`}>
                        <IconStyled icon={item.icon} />
                        <span>{item.title}</span>
                    </Button>
                )
            )}
        </Dropdown>
    )
}

const IconStyled = styled(FontAwesomeIcon)`
    margin-right: 20px;
`
