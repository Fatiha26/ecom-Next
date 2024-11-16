import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
                <Link href='#' className='navbar__link relative'>Home</Link>
                <Link href='#' className='navbar__link relative'>Categories</Link>
                <Link href='#' className='navbar__link relative'>Blogs</Link>
                <Link href='#' className='navbar__link relative'>Offers</Link>
                <Link href='#' className='navbar__link relative'>Career</Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar