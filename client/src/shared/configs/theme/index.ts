import { BaseTheme, ChooseColorsMode, Theme, ChooseTheme, CreateTheme } from './interface'

const chooseThemes: ChooseTheme = {
    dark: {
        mainBg: '#2d2d2d',
        secondBg: '#202020',
        txtColor: '#bbb',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px',
    },

    light: {
        mainBg: '#fff',
        secondBg: '#fafafb',
        txtColor: '#455560',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
}

const chooseColors: ChooseColorsMode = {
    blue: {
        mainColor: '#349eff',
        secondColor: '#62b4ff',
    },
    red: {
        mainColor: '#fb0b12',
        secondColor: '#ff4a6b',
    },
    green: {
        mainColor: '#019707',
        secondColor: '#4caf50',
    },
    orange: {
        mainColor: '#d68102',
        secondColor: '#fca11a',
    },
    cyan: {
        mainColor: '#10d4d2',
        secondColor: '#2ae9e6',
    },
}

const baseTheme: BaseTheme = {
    colors: {
        red: '#fb0b12',
        green: '#019707',
        orange: '#d68102',
        cyan: '#10d4d2',
        blue: '#349eff',
    },

    transition: {
        cubic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },

    wrapper: {
        padding: '30',
        borderRadius: '10',
    },

    weight: {
        normal: '400',
        medium: '500',
        semibold: '600',
    },

    mediaMax: {
        hg: '(max-width: 1899px)', // huge
        xlg: '(max-width: 1499px)', // extra large
        lg: '(max-width: 1299px)', // large
        md: '(max-width: 1023px)', // medium
        sm: '(max-width: 767px)', // small
        xsm: '(max-width: 639px)', //  extra small
        tn: '(max-width: 449px)', // tiny
    },

    mediaMin: {
        hg: '(min-width: 1900px)', // huge
        xlg: '(min-width: 1500px)', // extra large
        lg: '(min-width: 1300px)', // large
        md: '(min-width: 1024px)', // medium
        sm: '(min-width: 768px)', // small
        xsm: '(min-width: 640px)', // extra small
        tn: '(min-width: 450px)', // tiny
    },

    layout: {
        aside: {
            width: '300',
        },
    },
}

export const createTheme = ({ mode, color }: CreateTheme): Theme => {
    return { ...baseTheme, theme_colors: { ...chooseThemes[mode], ...chooseColors[color], txtWhite: '#fff' } }
}
