import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightFromBracket, faGear, faUser } from '@fortawesome/free-solid-svg-icons'

interface UserMenu {
    path: string
    title: string
    icon: IconProp
}

export const userMenuConfig: UserMenu[] = [
    { path: '/profile', title: 'Profile', icon: faUser },
    { path: '/settings', title: 'Settings', icon: faGear },
    { path: 'signin', title: 'Logout', icon: faArrowRightFromBracket },
]
