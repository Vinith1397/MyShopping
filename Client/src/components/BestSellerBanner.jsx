import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'

const BestSellerBanner = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-column sm:flex-row border border-gray-400 overflow-hidden '>
         {/* Best Seller banner left panel */}
        <div className='flex flex-col w-full justify-center items-center sm-items-start sm:justify-start space-y-2 p-10 m-4 h-64 sm:w-1/2 sm:text-left'>
        <div className='flex flex-col align-items-center text-center justify-between mt-32'>
            <p className='outfit-regular text-2 font-bold text-center mb-2'>------ OUR BestSeller</p>
            <h1 className='prata-regular text-2xl font-bold text-center mb-2'>Latest Collections</h1>
            <p className='outfit-regular text-center mb-2'>Explore our latest collections of high-quality products</p>
            <button className='outfit-regular px-4 py-2 rounded-md'>Shop Now------</button>
            </div>
        </div>
        {/* Best Seller banner right panel */}
        <img className='w-64 h-auto mb-0 sm:w-1/2  sm:flex-row justify-center items-center' src={assets.my_image3} alt="BestSeller"/>
        </div>
    </div>
  )
}

export default BestSellerBanner
