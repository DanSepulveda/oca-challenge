const ReposLink = ({ link, qty }) => {
    return (
        <p>
            Repos:
            <a
                href={`${link}/?tab=repositories`}
                target='_blank'
                className='fs-6 link-primary ms-1'
                rel='noreferrer'
            >
                {qty}
            </a>
        </p>
    )
}

export default ReposLink