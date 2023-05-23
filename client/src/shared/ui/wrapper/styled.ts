import styled, { css } from 'styled-components'

export interface PropsStyledWrapper {
    useHoverEffect?: boolean
}

export const Wrapper = styled.div<PropsStyledWrapper>`
    ${({ theme, useHoverEffect }) => {
        const baseStyle = css`
            background-color: ${theme.theme_colors.mainBg};
            box-shadow: ${theme.theme_colors.boxShadow};
            border-radius: ${theme.wrapper.borderRadius}px;
            padding: ${theme.wrapper.padding}px;
        `

        if (!useHoverEffect) return baseStyle

        return css`
            ${baseStyle}
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            transition: color 0.5s ease 0s;
            z-index: 1;

            &:before {
                content: '';
                position: absolute;
                left: -50%;
                top: 0;
                width: 100%;
                padding-top: 100%;
                border-radius: 50%;
                transform: scale(0);
                transition: transform 0.8s ease 0s;
                z-index: -1;

                ${({ theme }) => css`
                    background-image: linear-gradient(
                        to top right,
                        ${theme.theme_colors.mainColor},
                        ${theme.theme_colors.secondColor}
                    );
                `};
            }

            &:hover {
                color: ${({ theme }) => theme.theme_colors.txtWhite};

                &::before {
                    transform: scale(3);
                }
            }
        `
    }};
`
