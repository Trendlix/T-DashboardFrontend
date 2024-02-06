import Layout from '@/components/Layout/Layout'
import ChartWithUsers from '@/components/sections/ChartWithUsers'
import ChartsSecond from '@/components/sections/ChartsSecond'
import Hero from '@/components/sections/Hero'
import HomeLastSection from '@/components/sections/HomeLastSection'
import React from 'react'

function Home() {
  
  return (
    <Layout>
      <Hero />
      <ChartsSecond />
      <ChartWithUsers />
      <HomeLastSection />
    </Layout>
  )
}

export default Home