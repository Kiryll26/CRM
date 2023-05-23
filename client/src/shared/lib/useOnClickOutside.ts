import * as React from 'react'

interface Props<T> {
    ref: React.RefObject<T>
    callback: () => void
}

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>({ ref, callback }: Props<T>) => {
    React.useEffect(() => {
        const handler = (e: any) => {
            const { current: target } = ref
            if (target && !target.contains(e.target)) callback()
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])
}
