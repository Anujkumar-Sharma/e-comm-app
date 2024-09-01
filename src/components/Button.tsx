import React from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

const ButtonComponent: React.FC<ButtonProps> = ({
  type = 'button',
  children,
}) => {
  return (
    <button
      type={type}
      className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 focus:outline-none "
    >
      {children}
    </button>
  )
}

export default ButtonComponent
