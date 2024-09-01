'use client'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { initialValues, validationSchema } from './constant'
import InputComponent from '@/components/Input'
import ButtonComponent from '@/components/Button'
import Link from 'next/link'

const Register = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log({ values })
    // api call pending
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white w-full">
      <div className="bg-white p-8 max-w-md">
        <h2 className="font-normal mb-6 text-4xl font-popins">Sign up</h2>
        <p className="text-sm mb-6">
          Already have an account?{' '}
          <Link href="/login" className="text-green-500">
            Sign in
          </Link>
        </p>
        <Formik
          initialValues={{
            name: '',
            username: '',
            email: '',
            password: '',
            terms: false,
          }}
          validate={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <InputComponent name="name" placeholder="Your name" />
              <InputComponent name="username" placeholder="Username" />
              <InputComponent
                name="email"
                type="email"
                placeholder="Email address"
              />
              <InputComponent
                name="password"
                type="password"
                placeholder="Password"
              />

              <div className="flex items-center mb-4">
                <Field
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree with{' '}
                  <Link href="#" className="text-green-500">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-green-500">
                    Terms of Use
                  </Link>
                </label>
              </div>

              <ButtonComponent type="submit">Sign Up</ButtonComponent>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Register
