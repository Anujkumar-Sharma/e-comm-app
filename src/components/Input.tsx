import React from 'react'
import { Field, ErrorMessage } from 'formik'

interface InputProps {
  label?: string
  name: string
  type?: string
  placeholder?: string
}

const InputComponent: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  )
}

export default InputComponent
