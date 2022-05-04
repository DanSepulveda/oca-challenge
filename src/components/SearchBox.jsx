import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Button from './Button'
import { toast } from 'react-hot-toast'

const SearchBox = ({ setUsers, setNoResults }) => {

    const search_users = async (search) => {
        try {
            const users = await axios.get(`https://api.github.com/search/users?q=${search}`)

            if (users.data.items.length) setUsers(users.data)
            else setNoResults(true)
        } catch {
            toast.error('Something went wrong. Try again later.')
        }
    }

    return (
        <Formik
            initialValues={{ search: '' }}
            validationSchema={Yup.object({ search: Yup.string().required('Campo requerido') })}
            onSubmit={(values, { resetForm }) => {
                search_users(values.search)
                resetForm()
            }}
        >
            <Form>
                <Input
                    name='search'
                    id='search'
                    placeholder='Search Github Users'
                />
                <Button>Search</Button>
            </Form>
        </Formik>
    )
}

export default SearchBox