import styled, { css } from 'styled-components'

export type Anchor = 'left' | 'right' | 'top' | 'bottom'

export interface CommonPropsStyled {
    open: boolean
}

export interface DrawerProps extends CommonPropsStyled {
    anchor?: Anchor
}

export interface PropsStyled extends DrawerProps {}

export const Drawer = styled.div<DrawerProps>`
    flex: 1 0 auto;
    display: flex;
    outline: 0;
    z-index: 999;
    position: fixed;
    flex-direction: column;
    background-color: ${({ theme }) => theme.theme_colors.mainBg};
    transition: 0.4s transform;

    ${({ anchor = 'left', open }) => {
        switch (anchor) {
            case 'top':
                return css`
                    top: 0;
                    left: 0;
                    right: 0;
                    transform: translateY(${!open ? '-100%' : 0});
                `
            case 'left':
                return css`
                    left: 0;
                    top: 0;
                    bottom: 0;
                    transform: translateX(${!open ? '-100%' : 0});
                `
            case 'right':
                return css`
                    right: 0;
                    top: 0;
                    bottom: 0;
                    transform: translateX(${!open ? '100%' : 0});
                `
            case 'bottom':
                return css`
                    bottom: 0;
                    left: 0;
                    right: 0;
                    transform: translateY(${!open ? '100%' : 0});
                `
        }
    }}
`

export const Wrap = styled.div<CommonPropsStyled>`
    position: fixed;
    inset: 0;
    overflow: hidden;
    transition: 0.5s visibility;
    z-index: 1000;

    &:after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        position: absolute;
        transition: 0.5s opacity;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }

    ${({ open }) =>
        !open &&
        css`
            visibility: hidden;
            pointer-events: none;
            &:after {
                opacity: 0;
            }
        `}
`
