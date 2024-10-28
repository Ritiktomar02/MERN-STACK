import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-around'>
        <Link to='/' >
            Home
        </Link>

        <Link to='/all'>
            AllPost
        </Link>
    </div>
  )
}

export default Navbar