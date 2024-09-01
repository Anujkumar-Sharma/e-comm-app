'use client'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { initialValues, validationSchema } from './constant'
import InputComponent from '@/components/Input'
import ButtonComponent from '@/components/Button'
import Link from 'next/link'

const Login = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log({ values })
    // api call pending
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white w-full">
      <div className="bg-white p-8 w-full max-w-md">
        <h2 className="font-normal mb-6  text-4xl font-popins">Sign In</h2>
        <p className="text-sm mb-6">
          Don’t have an account yet?{' '}
          <Link href="/register" className="text-green-500">
            Sign Up
          </Link>
        </p>
        <Formik
          initialValues={initialValues}
          validate={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <InputComponent
                name="email"
                placeholder="Your username or email address"
              />
              <InputComponent
                name="password"
                type="password"
                placeholder="Password"
              />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Link href="#" className="text-sm text-gray-500">
                  Forgot password?
                </Link>
              </div>

              <ButtonComponent type="submit">Sign In</ButtonComponent>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
