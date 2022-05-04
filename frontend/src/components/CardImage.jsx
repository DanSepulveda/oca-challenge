const CardImage = ({ url, login }) => {
    return (
        <div className='me-4'>
            <img src={url} width={50} height={50} className='rounded-circle' alt={login} />
        </div>
    )
}

export default CardImage