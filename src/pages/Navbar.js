import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setSearchText} from '../redux/searchSlice'

function Navbar() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className='nav-container'>
      <h2>movieDB</h2>

      <div className='nav-menu'>
        <Link to='/'>Popular</Link>
        <Link to='/top-rated'>Top Rated</Link>
        <Link to='/upcoming'>Upcoming</Link>
      </div>

      <form
        className='search-bar'
        onSubmit={e => {
          e.preventDefault()
          dispatch(setSearchText(searchInput))
          navigate('/search')
        }}
      >
        <input
          type='search'
          placeholder='Search movies...'
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Navbar
