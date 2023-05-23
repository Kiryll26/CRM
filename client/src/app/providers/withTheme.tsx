import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { createTheme } from 'shared/configs'
import GlobalStyle from '../styles'
import { themeState, useColorsState } from 'entities/themeSettings'
import 'react-toastify/dist/ReactToastify.css'

export const withTheme = (Component: () => JSX.Element) => () => {
    const { color } = useColorsState()
    const theme = themeState((state) => state.theme)

    return (
        <ThemeProvider theme={createTheme({ color: color, mode: theme })}>
            <GlobalStyle />
            {<Component />}
        </ThemeProvider>
    )
}
