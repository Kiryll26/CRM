import * as React from 'react'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import styled, { keyframes } from 'styled-components'

interface LoadingState {
    isLoading: boolean
    setLoading: (isLoading: boolean) => void
}

export const useLoadingState = create<LoadingState>()(
    devtools((set, get) => ({
        isLoading: false,
        setLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
    }))
)

export const Loading = () => {
    return (
        <Wrap>
            <LoaderStyled />
        </Wrap>
    )
}

const wave = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }	
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.theme_colors.mainBg};
    z-index: 999;
`

const LoaderStyled = styled.span`
    margin: auto;
    width: 150px;
    height: 150px;
    background-color: ${({ theme }) => theme.theme_colors.mainBg};
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5) inset, 0 5px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 45%;
        top: -40%;
        background-color: #fff;
        animation: wave 5s linear infinite;
    }

    &:before {
        border-radius: 30%;
        background: rgba(255, 255, 255, 0.4);
        animation: ${wave} 5s linear infinite;
    }
`
