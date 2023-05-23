import { FlattenSimpleInterpolation } from 'styled-components'

export type ChooseColorType = 'red' | 'blue' | 'green' | 'orange' | 'cyan'

export type ChooseThemeType = 'dark' | 'light'

export interface ThemeColors {
    mainBg: string
    secondBg: string
    txtColor: string
    boxShadow: string
}

export interface ChooseTheme {
    dark: ThemeColors
    light: ThemeColors
}

export interface ChooseColors {
    mainColor: string
    secondColor: string
}

export interface ChooseColorsMode {
    red: ChooseColors
    green: ChooseColors
    orange: ChooseColors
    cyan: ChooseColors
    blue: ChooseColors
}

export interface Colors {
    red: string
    green: string
    orange: string
    cyan: string
    blue: string
}

export interface BaseTheme {
    colors: Colors

    transition: {
        cubic: string
    }

    wrapper: {
        padding: string
        borderRadius: string
    }

    weight: {
        normal: string
        medium: string
        semibold: string
    }

    mediaMax: {
        hg: string
        xlg: string
        lg: string
        md: string
        sm: string
        xsm: string
        tn: string
    }

    mediaMin: {
        hg: string
        xlg: string
        lg: string
        md: string
        sm: string
        xsm: string
        tn: string
    }

    layout: {
        aside: {
            width: string
        }
    }
}

export interface Theme extends BaseTheme {
    theme_colors: ThemeColors &
        ChooseColors & {
            txtWhite: string
        }
}

export interface CreateTheme {
    mode: ChooseThemeType
    color: ChooseColorType
}

export type StyledVariants<E extends string | number> = {
    [key in E]?: FlattenSimpleInterpolation
}
