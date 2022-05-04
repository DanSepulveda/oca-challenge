import UserCard from './UserCard'

const Users = ({ users }) => {
    const displayed_users = users.map(user => <UserCard key={user.id} user={user} />)
    return (
        <div>
            {displayed_users}
        </div>
    )
}

export default Users