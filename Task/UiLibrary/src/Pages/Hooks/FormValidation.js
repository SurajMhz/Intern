import { useState } from "react"

function useForm({ defaultValue = {}, validations = {} } = {}) {
    const [formData, setFormData] = useState(defaultValue)
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleValidate = (data, callback) => {
        const tempErrors = {}
        for (const element in validations) {
            const value = data[element]
            const rules = validations[element]

            if (rules?.required && !value) {
                tempErrors[element] = rules.message || `${element} is required`
                continue
            }
            if (rules?.validate) {
                const result = rules.validate(value)
                if (!result.requirement) {
                    tempErrors[element] = result.message
                }
            }
        }
        setErrors(tempErrors)
        if (Object.keys(tempErrors).length === 0 && callback){ callback()}
    }

    const handleChange = e => {
        const { name, value } = e.target
        const newData = { ...formData, [name]: value }
        setFormData(newData)
        if (isSubmitted) handleValidate(newData)
    }

    const handleSubmit = onSubmit => e => {
        e.preventDefault()
        setIsSubmitted(true)
        handleValidate(formData, () => onSubmit(formData))
    }

    return { formData, errors, handleChange, handleSubmit }
}

export default useForm