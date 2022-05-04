import { useField } from 'formik'

const Input = ({ ...props }) => {
    const [field] = useField(props)

    return (
        <div className='flex-grow-1 me-3 flex-md-grow-0 w-50'>
            <input type='text' {...field} {...props} className='w-100 py-1 px-2 rounded-1' />
        </div>
    )
}

export default Input