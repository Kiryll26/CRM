import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Routing } from 'pages'
import { withProviders } from './providers'
import { Navbar } from 'widgets/navbar'
import { Topnav } from 'widgets/topnav'
import { Drawer, Layout } from 'shared/ui'
import { ThemeSettings } from 'widgets/themeSettings'
import { useDrawerState } from 'entities/themeSettings'
import { useAuth } from 'features/user'

const App = () => {
    useAuth()
    const { isOpen, toggleDrawer } = useDrawerState()

    return (
        <>
            <Routing>
                <Layout>
                    <Layout.Aside>
                        <Layout.Sticky>
                            <Navbar />
                        </Layout.Sticky>
                    </Layout.Aside>
                    <Layout.Content>
                        <Layout.Header>
                            <Topnav />
                        </Layout.Header>
                        <Outlet />
                    </Layout.Content>
                    <Drawer open={isOpen} anchor='right' toggleDrawer={toggleDrawer}>
                        <ThemeSettings />
                    </Drawer>
                </Layout>
            </Routing>
            <ToastContainer autoClose={8000} />
        </>
    )
}

export default withProviders(App)
