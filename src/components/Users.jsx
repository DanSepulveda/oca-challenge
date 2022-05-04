import UserCard from './UserCard'

const Users = ({ users }) => {
    const displayed_users = users.map(user => <UserCard key={user.id} user={user} />)

    return (
        <section>
            {displayed_users}
        </section>
    )
}

export default Users