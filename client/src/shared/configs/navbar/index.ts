import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faUser, faDashboard } from '@fortawesome/free-solid-svg-icons'

interface RoutesConfig {
    path: string
    name: string
    icon: IconProp
}

export const routesConfig: RoutesConfig[] = [
    { path: '/', name: 'Dashboard', icon: faDashboard },
    { path: 'customers', name: 'Customers', icon: faUser },
]
