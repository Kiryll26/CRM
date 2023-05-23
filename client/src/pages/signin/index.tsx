import * as React from 'react'
import styled from 'styled-components'
import { FormProvider } from 'react-hook-form'
import { Button, Wrapper } from 'shared/ui'
import { useSignin } from 'features/user'
import { FormInput } from 'shared/ui/input'

const Signin = () => {
    const { methods, handleSubmit, onSubmit } = useSignin()

    return (
        <FormProvider {...methods}>
            <FormStyled render={'form'} onSubmit={handleSubmit(onSubmit)}>
                <InputWrap>
                    <FormInput name='email' placeholder='Email' />
                </InputWrap>
                <InputWrap>
                    <FormInput type='password' name='password' placeholder='Password' />
                </InputWrap>
                <ButtonStyled type='submit'>Sign in</ButtonStyled>
            </FormStyled>
        </FormProvider>
    )
}

const FormStyled = styled(Wrapper)`
    padding: 80px 30px;
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 500px;
    min-height: 500px;
    /* background-color: #005550; */
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

export default Signin
