import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'

const OurPolicy = () => {

  return (
    <div className='flex flex-col sm:flex-row text-center sm:text-left justify-around items-center text-xs sm:text-xs md:text-base text-gray-500'>
        <div>
            <img src={assets.exchange_icon} alt="exchange_icon" className='mb-5 w-12 m-auto'/>
            <p className = 'font-bold text-center'>Exchange Policy</p>
            <p className = 'text-xs text-center'>Exchange your products within 30 days of purchase</p>
    </div>

      <div>
            <img src={assets.quality_icon} alt="quality_icon" className='mb-5 w-12 m-auto'/>
            <p className = 'font-bold text-center'>Quality Policy</p>
            <p className = 'text-xs text-center'>We ensure high-quality products and materials</p>
    </div>

      <div>
            <img src={assets.support_img} alt="support_icon" className='mb-5 w-12 m-auto'/>
            <p className = 'font-bold text-center'>Support Policy</p>
            <p className = 'text-xs text-center'>We provide 24/7 support for any queries or concerns</p>
    </div>
    </div>
  )
}

export default OurPolicy
