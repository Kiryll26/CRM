import * as React from 'react'
import { toast } from 'react-toastify'

export const errorsAlert = (err: any) => {
    if (err.response) {
        toast.error(err.response.data.message, { position: 'bottom-right' })
    } else if (err.request) {
        toast.error(err.request, { position: 'bottom-right' })
    } else {
        toast.error(err.message, { position: 'bottom-right' })
    }
}
