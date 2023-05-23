import * as React from 'react'
import * as S from './styled'

export type Props<T extends React.ElementType> = {
    render?: keyof JSX.IntrinsicElements | React.ComponentType<any> | T
    className?: string
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<T> &
    S.PropsStyledWrapper

export const Wrapper = <T extends React.ElementType = 'div'>({
    children,
    className,
    useHoverEffect = false,
    render,
    ...rest
}: Props<T>) => {
    return (
        <S.Wrapper className={className} useHoverEffect={useHoverEffect} {...rest} as={render}>
            {children}
        </S.Wrapper>
    )
}
