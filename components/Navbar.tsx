import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav
    className='border border-green-600 flex max-container padding-container
    relative z-30 py-5'>
        <Link href='/'>
          <p className='text-green-600'>Home</p>
        </Link>
    </nav>
  )
}

export default Navbar