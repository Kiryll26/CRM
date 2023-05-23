import * as React from 'react'
import * as S from '../styled'

interface Props {
    value: string
    type?: string
    name: string
    className?: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = React.forwardRef<HTMLInputElement, React.PropsWithChildren<Props>>(
    ({ onChange, className, name, type = 'text', value, placeholder }: Props, ref) => {
        return (
            <S.Input
                ref={ref}
                onChange={onChange}
                className={className}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
            />
        )
    }
)
