import React from 'react'

export const useForm = ( initialValue) => {
    const [form, setForm ] = React.useState(initialValue)

    const onChange = (value, name) => {
        setForm( {...form, [name]:value})
    }
    return { form, onChange }
}