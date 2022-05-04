const Button = ({ children }) => {
    return (
        <button type='submit' className='btn btn-light text-white'>
            {children}
        </button>
    )
}

export default Button