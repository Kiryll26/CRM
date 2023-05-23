import { ChooseColorType } from 'shared/configs'

interface ColorsConfig {
    color: ChooseColorType
    title: string
}

export const colorsConfig: ColorsConfig[] = [
    { color: 'blue', title: 'Blue' },
    { color: 'red', title: 'Red' },
    { color: 'green', title: 'Green' },
    { color: 'cyan', title: 'Cyan' },
    { color: 'orange', title: 'Orange' },
]
