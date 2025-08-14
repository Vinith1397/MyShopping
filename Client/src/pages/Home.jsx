import React from 'react'
import BestSellerBanner from '../components/BestSellerBanner'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <div>
      <BestSellerBanner/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}
export default Home
