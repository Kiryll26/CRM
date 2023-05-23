import * as React from 'react'
import * as S from './styled'
import { useOnClickOutside } from 'shared/lib/useOnClickOutside'

interface Props {
    header: React.ReactNode
    children: React.ReactNode
    position?: S.Position
    size?: S.Size
}

const DropdownComponent = ({ children, position, header, size }: Props) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [isShow, setShow] = React.useState<boolean>(false)

    useOnClickOutside({ ref, callback: () => setShow(false) })

    return (
        <S.Dropdown onClick={() => setShow(!isShow)} ref={ref} size={size}>
            <S.Header>{header}</S.Header>
            <S.Content active={isShow} position={position} size={size}>
                {children}
            </S.Content>
        </S.Dropdown>
    )
}

DropdownComponent.size = S.Size
DropdownComponent.position = S.Position

export const Dropdown = DropdownComponent
