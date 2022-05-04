const Button = ({ children }) => {
    return (
        <button type='submit' className='btn btn-outline-light text-white'>
            {children}
        </button>
    )
}

export default Button