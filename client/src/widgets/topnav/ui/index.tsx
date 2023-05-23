import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { UserMenu } from './userMenu'
import { OpenDrawer } from './openDrawer'
import { Button } from 'shared/ui'
import { useUserState } from 'entities/user'

export const Topnav = () => {
    const role = useUserState((state) => state.role)

    return (
        <Wrap>
            <Right>
                {role === 'ADMIN' ? (
                    <ButtonStyled render={Link} to={'/signup'}>
                        <span>Add a user</span>
                    </ButtonStyled>
                ) : null}
                <UserMenu />
                <OpenDrawer />
            </Right>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 10px;
`

const ButtonStyled = styled(Button)`
    font-size: 14px;
    margin-right: 20px;
    padding: 0;
`
