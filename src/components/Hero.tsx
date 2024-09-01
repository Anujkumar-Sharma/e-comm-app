import React from 'react'
import styles from '@/app/styles/Hero.module.scss'
import Carousel from './carousel'

const Hero: React.FC = () => {
  return (
    <>
      <Carousel />
      <section className={`${styles.hero} py-16`}>
        <div>
          <h1>
            Simply Unique/ <br /> Simply Better.
          </h1>
          <p>
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019.
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
