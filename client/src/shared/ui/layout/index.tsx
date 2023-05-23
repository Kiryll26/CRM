import * as React from 'react'
import * as S from './styled'

interface CommonProps {
    children: React.ReactNode
}

export const Layout = ({ children }: CommonProps) => <S.Layout>{children}</S.Layout>

const Header = ({ children }: CommonProps) => <S.Header>{children}</S.Header>
const Aside = ({ children }: CommonProps) => <S.Aside>{children}</S.Aside>
const Content = ({ children }: CommonProps) => <S.Content>{children}</S.Content>
const Sticky = ({ children }: CommonProps) => <S.Sticky>{children}</S.Sticky>

Layout.Header = Header
Layout.Aside = Aside
Layout.Content = Content
Layout.Sticky = Sticky
