import * as React from 'react'
import * as S from './styled'

interface Props extends S.PropsBadge {
    children: React.ReactNode
}

const BadgeComponent = ({ bg, children }: Props) => {
    return <S.Badge bg={bg}>{children}</S.Badge>
}

BadgeComponent.bg = S.Bg

export const Badge = BadgeComponent
