'use client'

import { NAV_LINKS } from '@/constant/navbar'
import getKey from '@/utils/getKey'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavBarProps = { className?: string }

const NavBar = ({ className }: NavBarProps) => {
  const currentPath = usePathname()
  return (
    <div>
      <nav className={classNames('space-x-6', className)}>
        {NAV_LINKS.map(({ title, href }) => (
          <Link
            href={href}
            key={getKey()}
            className={classNames('text-sm leading-6 font-medium', {
              'text-gray-700': currentPath !== href,
            })}
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default NavBar
