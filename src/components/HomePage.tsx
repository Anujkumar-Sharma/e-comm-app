import React from 'react'
import Header from './Header/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewArrivals from '../components/NewArrivals'
import Footer from '../components/Footer'
import CmsBanner from './CmsBanner'
import ContainerLayout from '@/app/layouts/ContainerLayout'
import CategorySection from './category'

const HomePage: React.FC = () => {
  return (
    <div>
      <CmsBanner />
      <Header />
      <ContainerLayout>
        <Hero />
        <CategorySection />
        <Features />
      </ContainerLayout>
      <NewArrivals />
      <Footer />
    </div>
  )
}

export default HomePage
