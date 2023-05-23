import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { useUserState } from 'entities/user'

interface PageType {
    path: string
    Component: React.LazyExoticComponent<() => JSX.Element>
}

const Signup = React.lazy(() => import('./signup')) // Регистрировать пользователей может только admin

const privateRoutes: PageType[] = [
    { Component: React.lazy(() => import('./dashboard')), path: '/' },
    { Component: React.lazy(() => import('./customers')), path: '/customers' },
]

const publicRoutes: PageType[] = [{ Component: React.lazy(() => import('./signin')), path: '/signin' }]

interface Props {
    children: React.ReactNode
}

export const Routing = ({ children }: Props) => {
    const [user, role] = useUserState((state) => [state.user, state.role])

    return (
        <Routes>
            {user ? (
                <>
                    <Route path='/' element={children}>
                        {privateRoutes.map(({ path, Component }) => (
                            <Route key={`route-${path}`} path={path} element={<Component />} />
                        ))}
                        {role === 'ADMIN' ? <Route path={'/signup'} element={<Signup />} /> : null}
                    </Route>
                    <Route path='*' element={<Navigate to='/' />} />
                </>
            ) : (
                <>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={`route-${path}`} path={path} element={<Component />} />
                    ))}
                    <Route path='*' element={<Navigate to='/signin' />} />
                </>
            )}
        </Routes>
    )
}
