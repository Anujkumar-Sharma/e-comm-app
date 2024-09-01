import React from 'react'
import styles from '@/app/styles/Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">3legant</h3>
          <p className="text-gray-600">Gift & Decoration Store</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Join Our Newsletter</h3>
          <form className="mt-4">
            <input
              className="px-4 py-2 border border-gray-300 rounded"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <button className="ml-2 px-4 py-2 bg-black text-white rounded">
              Signup
            </button>
          </form>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-black">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-8 border-t border-gray-200">
        <p className="text-gray-500">
          &copy; 2023 3legant. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
