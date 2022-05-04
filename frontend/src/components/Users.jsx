import Pagination from './Pagination'
import UserCard from './UserCard'

const Users = ({ users, page, setPage }) => {
    const pageQty = Math.ceil(users.length / 10)
    const totalUsers = users.length

    const first = 10 * page - 9
    const last = 10 * page > totalUsers ? totalUsers : 10 * page
    const info = `Showing ${first}-${last} of ${totalUsers}`

    return (
        <section className='container'>
            <h1 className='text-center fs-1 my-5'>Results</h1>
            <h3 className='mb-2'>{info}</h3>
            <div className='row'>
                {users.slice(10 * page - 10, 10 * page).map(user => <UserCard key={user.id} user={user} />)}
            </div>
            <Pagination page={page} setPage={setPage} pageQty={pageQty} />
        </section>
    )
}

export default Users