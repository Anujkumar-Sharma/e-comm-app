'use client'

import { NAV_LINKS } from '@/constant/navbar'
import getKey from '@/utils/getKey'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavBar from './NavBar'

const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  const handleMenuToggle = () => setOpen(!open)
  return (
    <nav className="md:hidden all-center">
      <button onClick={handleMenuToggle}>
        <Image src={'/icons/hamburger.png'} height={24} width={24} alt="menu" />
      </button>
      {open && (
        <div className="absolute top-24 all-center right-0 text-right p-4 bg-white shadow-lg rounded-lg w-full py-2 z-50">
          <NavBar className="px-4 py-2" />
          {/* {NAV_LINKS.map(({ href, title }) => (
            <Link
              key={getKey()}
              href={href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {title}
            </Link>
          ))} */}
        </div>
      )}
    </nav>
  )
}

export default BurgerMenu
