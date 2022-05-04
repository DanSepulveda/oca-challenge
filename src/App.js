import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import SearchBox from './components/SearchBox'
import NoResults from './components/NoResults'
import Loader from './components/Loader'
import Users from './components/Users'

const App = () => {
  // State variables to control components to show
  const [users, setUsers] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <main>
      <div><Toaster /></div>
      <SearchBox setUsers={setUsers} setNoResults={setNoResults} setLoading={setLoading} setPage={setPage} />
      {users.length && <Users users={users} page={page} setPage={setPage} />}
      {noResults && <NoResults />}
      {loading && <Loader />}
    </main>
  )
}

export default App