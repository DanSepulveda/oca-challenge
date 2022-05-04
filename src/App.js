import './App.css'
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

  // Conditional component rendering
  const users_cards = users.length && <Users users={users} />
  const message_after_search = noResults && <NoResults />
  const loader_while_fetch = loading && <Loader />

  return (
    <main>
      <div><Toaster /></div>
      <SearchBox setUsers={setUsers} setNoResults={setNoResults} setLoading={setLoading} />
      {users_cards}
      {message_after_search}
      {loader_while_fetch}
    </main>
  )
}

export default App