import 'styled-components'

import { Theme } from 'shared/configs'

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
