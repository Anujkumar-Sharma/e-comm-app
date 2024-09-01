import React from 'react'
import styles from '@/app/styles/Header.module.scss'
import ContainerLayout from '@/app/layouts/ContainerLayout'
import Logo from '../Logo'
import NavBar from './NavBar'
import HeaderTools from './HeaderTools'

const Header: React.FC = () => {
  return (
    <ContainerLayout>
      <header className={`${styles.header} bg-white shadow-md`}>
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <NavBar className="hidden md:block" />
          <HeaderTools />
        </div>
      </header>
    </ContainerLayout>
  )
}

export default Header
