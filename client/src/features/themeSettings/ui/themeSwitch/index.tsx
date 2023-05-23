import * as React from 'react'
import { Switch } from 'shared/ui'
import { themeState } from 'entities/themeSettings'

export const ThemeSwitch = () => {
    const toggleTheme = themeState((state) => state.toggleTheme)
    return <Switch onChange={toggleTheme} />
}
