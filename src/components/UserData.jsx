const UserData = ({ title, value }) => {
    return (
        <p className='me-4'>{`${title}: ${value | '-'}`}</p>
    )
}

export default UserData