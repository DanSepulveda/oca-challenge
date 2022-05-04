import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Pagination = (props) => {
    const { page, setPage, pageQty } = props

    const changePage = (newPage) => {
        window.scrollTo(0, 0)
        setPage(newPage)
    }

    const previousPage = page !== 1 &&
        <div className='d-flex align-items-center link rounded-1 link-primary' onClick={() => changePage(page - 1)}>
            <MdArrowBackIosNew />
            <span>Anterior</span>
        </div>

    const actualPage = <span className='mx-5 info'>{`Página ${page} de ${pageQty}`}</span>

    const nextPage = page !== pageQty &&
        <div className='d-flex align-items-center link rounded-1 link-primary' onClick={() => changePage(page + 1)}>
            <span>Siguiente</span>
            <MdArrowForwardIos />
        </div>

    return (
        <div className='d-flex mt-3 mb-5 justify-content-center align-items-center'>
            {previousPage}
            {actualPage}
            {nextPage}
        </div>
    )
}

export default Pagination