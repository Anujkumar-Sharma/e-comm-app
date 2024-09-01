import React from 'react'
import styles from '@/app/styles/NewArrivals.module.scss'

const products = [
  {
    name: 'Loveseat Sofa',
    price: '$189.00',
    discount: '$490.00',
    image: '/images/sofa.png',
    rating: 5,
  },
  // Add more products...
]

const NewArrivals: React.FC = () => {
  return (
    <section className={styles.newArrivals}>
      <div className="mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="text-center">
              <img src={product.image} alt={product.name} className="mb-4" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-500 line-through">{product.discount}</p>
              <p className="text-lg font-bold">{product.price}</p>
              <div className="flex justify-center">
                {/* Render stars based on rating */}
                {Array(product.rating)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className="text-yellow-500">
                      ⭐
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
