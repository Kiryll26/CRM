import * as React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import { useUserState } from 'entities/user'

export const useLogout = () => {
    const navigate = useNavigate()
    const resetUserState = useUserState((state) => state.reset)

    return () => {
        resetUserState()
        Cookies.remove('logged_in', { path: '/' })
        navigate('/signin')
    }
}
