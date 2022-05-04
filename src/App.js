import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [users, setUsers] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <div><Toaster /></div>
      <SearchBox setUsers={setUsers} setNoResults={setNoResults} />
    </div>
  )
}

export default App