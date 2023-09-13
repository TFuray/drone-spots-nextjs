'use client'
import { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(null)



  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('/api/search')
    .then((res) => res.json())
    .then((data) => setData(data))
    setSearch('')
  }

  return (
    <div className='search-bar'>
      <form onSubmit={onSubmit} className=''>
        <input
          className='form-control input input-bordered input-sm'
          type='text'
          placeholder='enter zipcode'
          value={search}
          onChange={handleSearch}
        />
        <button className='btn btn-sm btn-outline' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
