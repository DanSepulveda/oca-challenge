import { useField } from 'formik'

const Input = ({ ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <input type='text' {...field} {...props} />
            <div><span>{meta.touched && meta.error ? `* ${meta.error}` : null}</span></div>
        </div>
    )
}

export default Input