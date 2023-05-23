import * as React from 'react'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

import { useUserState } from 'entities/user'
import { DataUser, SigninType, signin } from 'shared/api/user'
import { errorsAlert } from 'shared/lib'
import { useLoadingState } from 'shared/ui/loading'

const signInSchema = object({
    email: string().min(1, 'Email address is required').email('Email Address is invalid'),
    password: string()
        .min(1, 'Password is required')
        .min(6, 'Password must be more than 6 characters')
        .max(32, 'Password must be less than 32 characters'),
})

export type InputTypes = TypeOf<typeof signInSchema>

export const useSignin = () => {
    const navigate = useNavigate()
    const { setUser } = useUserState((state) => state)
    const setLoading = useLoadingState((state) => state.setLoading)
    const methods = useForm<InputTypes>({
        resolver: zodResolver(signInSchema),
    })
    const {
        reset,
        formState: { isSubmitSuccessful },
        handleSubmit,
    } = methods

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful])

    const onSubmit: SubmitHandler<SigninType> = async (data, ev?: React.BaseSyntheticEvent) => {
        ev?.preventDefault()
        setLoading(true)

        const { response, err }: any = await signin(data)

        if (err) {
            setLoading(false)
            errorsAlert(err)

            return
        }

        const decode: DataUser = jwt_decode(response)
        const { iat, exp, ...userData } = decode

        setUser({ ...userData, user: true })
        navigate('/')
        setLoading(false)
        Cookies.set('logged_in', response, { SameSite: 'Strict', path: '/', expires: 1 })
    }

    return { methods, handleSubmit, onSubmit }
}
