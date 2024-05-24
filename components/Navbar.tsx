import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.jpg'
import React from 'react'

const Navbar = () => {
  return (
    <nav
    className='border-green-600 flexbetween max-container padding-container
    relative z-30 py-5'>
        <Link href='/'>
          <Image src={logo} alt='logo' width={50} height={50}/>

          <ul className='hidden h-full gap-12 lg:flex'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </Link>
    </nav>
  )
}

export default Navbar