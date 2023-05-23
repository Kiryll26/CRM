import styled from 'styled-components'

export const Wrap = styled.div`
    height: 35px;
    width: 65px;
    position: relative;
`

export const Label = styled.label`
    position: absolute;
    width: 100%;
    height: 35px;
    border-radius: 25px;
    cursor: pointer;
`

export const Slider = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
    background-color: #28292c;

    &:before {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 29px;
        height: 29px;
        border-radius: 50%;
        box-shadow: inset 10px -0 0px 0px #d8dbe0;
        background-color: #28292c;
        transition: 0.3s;
    }
`

export const Input = styled.input`
    display: none;
    position: absolute;

    &:checked ~ ${Slider} {
        background-color: #d8dbe0;
        &:before {
            transform: translateX(30px);
            background-color: #28292c;
            box-shadow: none;
        }
    }
`
