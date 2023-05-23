import * as React from 'react'
import * as S from './styled'

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Switch = ({ onChange }: Props) => {
    return (
        <S.Wrap>
            <S.Label>
                <S.Input type='checkbox' onChange={onChange} />
                <S.Slider />
            </S.Label>
        </S.Wrap>
    )
}
