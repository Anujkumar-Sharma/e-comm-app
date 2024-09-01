import getKey from '@/utils/getKey'
import Image from 'next/image'
import React from 'react'
import BurgerMenu from './BurgerMenu'

const TOOLS = [
  {
    src: '/icons/search-02.svg',
    alt: 'search-icon',
  },
  {
    src: '/icons/cart-button.svg',
    alt: 'cart-button',
  },
  {
    src: '/icons/user-circle.svg',
    alt: 'user-circle',
  },
]

const HeaderTools = () => {
  return (
    <div className="flex gap-4">
      {TOOLS.map(({ src, alt }) => (
        <Image src={src} height={30} width={30} alt={alt} key={getKey()} />
      ))}
      <BurgerMenu />
    </div>
  )
}

export default HeaderTools
