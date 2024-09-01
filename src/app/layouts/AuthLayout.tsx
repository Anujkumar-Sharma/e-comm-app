// components/AuthLayout.tsx
import React from 'react'
import styles from './authlayout.module.scss'
import { APP_CONST } from '@/constant/app'
import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_left}>
        <p>{APP_CONST.LOGO}</p>
        <Image
          src={'/images/sofa.png'}
          alt="left-side-sofa"
          height={'100'}
          width={'1000'}
        />
      </div>
      <div className={styles.auth_right}>{children}</div>
    </div>
  )
}

export default AuthLayout
