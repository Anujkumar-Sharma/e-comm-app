import React from 'react'
import styles from '@/app/styles/Features.module.scss'

const features = [
  { title: 'Free Shipping', description: 'Order above $200', icon: '🚚' },
  { title: 'Money-back', description: '30 days guarantee', icon: '💵' },
  { title: 'Secure Payments', description: 'Secured by Stripe', icon: '🔒' },
  { title: '24/7 Support', description: 'Phone and Email support', icon: '📞' },
]

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className="mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
