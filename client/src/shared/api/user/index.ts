import client from '../client'
import { AUTH, SIGN_UP, SIGN_IN } from '../consts'

export type Role = 'ADMIN' | 'USER'

export interface DataUser {
    id: number
    role: Role
    email: string
    name: string
    exp: number
    iat: number
}

export interface SignupData {
    result: 0 | 1
    message: string
}

export interface SigninType {
    email: string
    password: string
}

export interface SignupType extends SigninType {
    name: string
    role: Role
}

export const signup = async (data: SignupType) => {
    try {
        const response: SignupData = await client.post(SIGN_UP, data)

        return { response }
    } catch (err) {
        return { err }
    }
}

export const signin = async ({ email, password }: SigninType) => {
    try {
        const response: DataUser = await client.post(SIGN_IN, { email, password })

        return { response }
    } catch (err) {
        return { err }
    }
}

export const auth = async () => {
    try {
        const response: DataUser = await client.get(AUTH)

        return { response }
    } catch (err) {
        return { err }
    }
}
