import axios from 'axios'
import { useEffect, useState } from 'react'
import CardImage from './CardImage'
import ReposLink from './ReposLink'
import UserData from './UserData'

const UserCard = ({ user }) => {
    const { login, avatar_url, html_url, repos_url, url } = user

    // State variables to save fetched data
    const [repos, setRepos] = useState([])
    const [userData, setUserData] = useState({})

    const { bio, blog, followers, following, name, location } = userData

    const getRepos = async (url) => {
        try {
            const response = await axios.get(url)
            if (response.status === 200) setRepos(response.data.length)
            else throw new Error()
        } catch {
            // console.log('Error')
        }
    }

    const getUserData = async (url) => {
        try {
            const response = await axios.get(url)
            if (response.status === 200) setUserData(response.data)
            else throw new Error()
        } catch {
            // console.log('Error')
        }
    }

    useEffect(() => {
        getRepos(repos_url)
        getUserData(url)
        //eslint-disable-next-line
    }, [])

    return (
        <div className='p-3 col-12 col-lg-6'>
            <div className='container-fluid d-flex bg-light rounded shadow p-3'>
                <CardImage url={avatar_url} alt={login} />
                <div className='flex-grow-1'>
                    <a href={html_url} target='_blank' className='me-5 fs-4 link-primary' rel='noreferrer'>{login}</a>
                    <span className='fs-5 fw-light'>{name}</span>
                    <p className='fs-6 mb-3'>{bio || '-'}</p>
                    <div className='d-flex mb-3'>
                        <UserData title='Followers' value={followers} />
                        <UserData title='Following' value={following} />
                        <ReposLink link={html_url} qty={repos} />
                    </div>
                    <div className='d-flex justify-content-between'>
                        {blog ? <a href={blog} target='_blank' className='link-primary' rel='noreferrer'>Website</a> : '-'}
                        <p className='fs-6'>{location || '-'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard