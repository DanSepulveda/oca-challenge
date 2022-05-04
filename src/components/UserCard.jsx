const UserCard = ({ user }) => {
    const { login, avatar_url, followers_url, html_url } = user

    console.log(user)
    return (
        <div className="bg-red-900">
            <div className='rounded-full'>
                <img src={avatar_url} className="w-24 h-24" />
            </div>
            <a href={html_url} target='_blank'>{login}</a>

        </div>
    )
}

export default UserCard