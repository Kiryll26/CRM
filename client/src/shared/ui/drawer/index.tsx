import * as React from 'react'
import * as S from './styled'

interface Props extends S.PropsStyled {
    toggleDrawer: (e: React.MouseEvent<HTMLDivElement>) => void
    children: React.ReactNode
}

export const Drawer = ({ anchor, open, toggleDrawer, children }: Props) => {
    return (
        <S.Wrap open={open} onClick={toggleDrawer}>
            <S.Drawer
                open={open}
                anchor={anchor}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                {' '}
                {children}
            </S.Drawer>
        </S.Wrap>
    )
}
