import * as React from 'react'
import * as S from './styled'

export enum Tag {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
}

export enum Weight {
    normal = 'normal',
    medium = 'medium',
    semibold = 'semibold',
}

export interface HeadingStyledProps {
    tag?: Tag
    weight?: Weight
}

export interface HeadingProps extends HeadingStyledProps {
    className?: string
    children: React.ReactNode
}

const HeadingComponent = ({ tag, weight, children, className, ...rest }: HeadingProps) => (
    <S.Heading weight={weight} className={className} as={tag} {...rest}>
        {children}
    </S.Heading>
)

HeadingComponent.tag = Tag
HeadingComponent.weight = Weight

export const Heading = HeadingComponent
