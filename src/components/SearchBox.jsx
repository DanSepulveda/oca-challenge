import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import Button from './Button'
import { toast } from 'react-hot-toast'
import { BsGithub } from 'react-icons/bs'

const SearchBox = ({ setUsers, setNoResults, setLoading, setPage, setFirstSearch }) => {

    const search_users = async (search) => {
        // Reset variable if user has made a previous search
        setNoResults(false)

        // Reset page when searching again
        setPage(1)

        // Display loading message
        setLoading(true)

        // Changes state variable to change displayed message
        setFirstSearch(false)

        try {
            const users = await axios.get(`https://api.github.com/search/users?q=${search}`)
            if (users.data.items.length) {
                setUsers(users.data.items)
            } else {
                setNoResults(true)
                setUsers([])
            }
        } catch {
            toast.error('Something went wrong. Try again later.')
        }

        // Hide loading message once fetch is done
        setLoading(false)
    }

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center bg-dark py-3'>
            <BsGithub className='text-white fs-1' />
            <Formik
                initialValues={{ search: '' }}
                validationSchema={Yup.object({ search: Yup.string().required('Campo requerido') })}
                onSubmit={(values, { resetForm }) => {
                    search_users(values.search)
                    resetForm()
                }}
            >
                <Form className='d-flex justify-content-center align-items-center container'>
                    <Input
                        name='search'
                        id='search'
                        placeholder='Search Github Users'
                    />
                    <Button>Search</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default SearchBox