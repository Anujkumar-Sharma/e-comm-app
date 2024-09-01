// components/ContainerLayout.tsx
import React from 'react'

interface ContainerLayoutProps {
  children: React.ReactNode
}

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children }) => {
  return <div className={'px-4 md:px-24'}>{children}</div>
}

export default ContainerLayout
