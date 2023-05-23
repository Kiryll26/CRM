import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import * as S from '../styled'
import styled from 'styled-components'
import { Dropdown } from 'shared/ui/dropdown'
import { Button } from 'shared/ui/button'

interface Options {
    value: string
    title: string
}

interface InputProps {
    name: string
    placeholder?: string
    options: Options[]
}

export const FormSelect = ({ name, placeholder = '', options }: InputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext()
    const [value, setValue] = React.useState<string>(options[0].title)

    return (
        <>
            <Controller
                control={control}
                defaultValue={options[0].value}
                name={name}
                render={({ field }) => (
                    <Dropdown
                        size={Dropdown.size.full}
                        header={
                            <>
                                <InputStyled {...field} readOnly={true} />
                                <Label value={value} placeholder={placeholder} readOnly={true} />
                            </>
                        }
                    >
                        {options.map((item) => (
                            <Button
                                render={'a'}
                                key={`select_${item.value}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    field.onChange(item.value)
                                    setValue(item.title)
                                }}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Dropdown>
                )}
            />
            {errors[name] ? <S.TextError>{errors[name].message}</S.TextError> : null}
        </>
    )
}

const InputStyled = styled(S.Input)`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
`

const Label = styled(S.Input)`
    cursor: pointer;
`
