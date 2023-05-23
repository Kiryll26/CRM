import * as React from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { signup, SignupData, SignupType } from 'shared/api/user'
import { useLoadingState } from 'shared/ui/loading'
import { errorsAlert } from 'shared/lib'

const signUpSchema = z.object({
    email: z.string().min(1, 'Email address is required').email('Email Address is invalid'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(6, 'Password must be more than 6 characters')
        .max(32, 'Password must be less than 32 characters'),
    name: z.string().min(1, 'Password is required').max(32, 'Password must be less than 32 characters'),
    role: z.enum(['ADMIN', 'USER']),
})

export type InputTypes = z.TypeOf<typeof signUpSchema>

export const useSignup = () => {
    const navigate = useNavigate()
    const setLoading = useLoadingState((state) => state.setLoading)
    const methods = useForm<InputTypes>({
        resolver: zodResolver(signUpSchema),
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

    const onSubmit: SubmitHandler<SignupType> = async (data, ev?: React.BaseSyntheticEvent) => {
        ev?.preventDefault()
        setLoading(true)

        const { response, err }: any = await signup(data)

        if (err) {
            setLoading(false)
            errorsAlert(err)
            return
        }

        navigate('/')
        setLoading(false)
        const decode: SignupData = response
        toast.success(decode.message, { position: 'bottom-right' })
    }

    return { methods, handleSubmit, onSubmit }
}
