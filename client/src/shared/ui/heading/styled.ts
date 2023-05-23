import styled, { css } from 'styled-components'
import { StyledVariants } from 'shared/configs/theme/interface'
import { HeadingStyledProps, Tag, Weight } from './index'

export const Heading = styled.h1<HeadingStyledProps>`
    display: block;
    line-height: 1.2;
    font-weight: ${({ theme, weight = Weight.semibold }) => theme.weight[weight]};
    ${({ tag = Tag.h1 }) => tags[tag]}
`

const tags: StyledVariants<Tag> = {
    h1: css`
        font-size: 1.7rem;
    `,
    h2: css`
        font-size: 1.5rem;
    `,
    h3: css`
        font-size: 1.3rem;
    `,
    h4: css`
        font-size: 1rem;
    `,
}
