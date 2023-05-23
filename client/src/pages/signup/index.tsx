import * as React from 'react'
import styled from 'styled-components'
import { FormProvider } from 'react-hook-form'

import { Button, Wrapper } from 'shared/ui'
import { FormInput, FormSelect } from 'shared/ui/input'
import { useSignup } from 'features/user'

const Signup = () => {
    const { methods, handleSubmit, onSubmit } = useSignup()
    return (
        <FormProvider {...methods}>
            <FormStyled render={'form'} onSubmit={handleSubmit(onSubmit)}>
                <InputWrap>
                    <FormInput name='name' placeholder='Name' />
                </InputWrap>
                <InputWrap>
                    <FormSelect
                        name='role'
                        placeholder='Role'
                        options={[
                            { title: 'Admin', value: 'ADMIN' },
                            { title: 'User', value: 'USER' },
                        ]}
                    />
                </InputWrap>
                <InputWrap>
                    <FormInput name='email' placeholder='Email' />
                </InputWrap>
                <InputWrap>
                    <FormInput type='password' name='password' placeholder='Password' />
                </InputWrap>
                <ButtonStyled type='submit'>Sign up</ButtonStyled>
            </FormStyled>
        </FormProvider>
    )
}

const FormStyled = styled(Wrapper)`
    padding: 80px 30px;
    margin: auto;
    width: 100%;
    max-width: 500px;
    min-height: 500px;
`

const InputWrap = styled.div`
    margin-top: 20px;
    &:first-child {
        margin-top: 0;
    }
`

const ButtonStyled = styled(Button)`
    margin-top: 20px;
    background-color: ${({ theme }) => theme.theme_colors.secondBg};
`

export default Signup
