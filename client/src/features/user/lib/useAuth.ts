import * as React from 'react'
import jwt_decode from 'jwt-decode'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import { useUserState } from 'entities/user'
import { DataUser, auth } from 'shared/api/user'
import { errorsAlert } from 'shared/lib'
import { useLoadingState } from 'shared/ui/loading'

export const useAuth = () => {
    const navigate = useNavigate()
    const user = Cookies.get('logged_in')
    const { setUser } = useUserState((state) => state)
    const setLoading = useLoadingState((state) => state.setLoading)

    React.useEffect(() => {
        setLoading(true)

        if (!user) {
            navigate('/signin')
            setLoading(false)

            return
        } else {
            ;(async () => {
                const { response, err }: any = await auth()
                if (err) {
                    setLoading(false)
                    navigate('/signin')
                    errorsAlert(err)
                    return
                }

                const decode: DataUser = jwt_decode(response)
                const { iat, exp, ...userData } = decode

                setUser({ ...userData, user: true })
                navigate('/')
                setLoading(false)
                Cookies.set('logged_in', response, { path: '/', expires: 1 })
            })()
        }
    }, [])
}
