import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {

  return (
    <div className='w-full bg-gray-200 mt-10'>
        <div className='w-full h-12 bg-black text-center cursor-pointer text-white font-bold' onClick={() => window.scrollTo(0, 0)}>
            <p className='p-3'>Get to top</p>
            </div>
        <div className='flex flex-col sm:flex-row justify-around p-10'>
            <div>
            <img className='w-16 h-16 mb-5' src={assets.logo} alt="logo" />
            <p className='text-xs '> The Store App Belongs to Pasula's family
                <br></br> Owned and Signed by Pasula Vinith Kumar </p>
            </div>
            
        <div>
            <p className='font-bold text-xl'>Get to Know Us</p>
            <ul>
                <li className='text-xs'>Home</li>
                <li className='text-xs'>About</li>
                <li className='text-xs'>Delivery</li>
                <li className='text-xs'>Privacy Policy</li>
                <li className='text-xs'>Careers</li>
                <li className='text-xs'>Terms & Conditions</li>
            </ul>
            
        </div>
        <div>
            <p className='font-bold text-xl'>Make Money with Us</p>
            <ul>
                <li className='text-xs'>Sell on MyShopping</li>
                <li className='text-xs'>Affiliate Program</li>
                <li className='text-xs'> Become a Delivery Partner</li>
                <li className='text-xs'>Advertise Your Products</li>
                <li className='text-xs'>Become an Affiliate</li>
            </ul>
            
        </div>
        <div>
            <p className='font-bold text-xl'>Let Us Help You</p>
            <ul>
                <li className='text-xs'>Your Account</li>
                <li className='text-xs'>Your Orders</li>
                <li className='text-xs'>Customer Support</li>
                <li className='text-xs'>Manage you devices</li>
                <li className='text-xs'>Help</li>
                <li className='text-xs'>Contact us</li>
                <li className='text-xs'>Registry an dGift lists</li>
                <li className='text-xs'>Product Recalls abd Safety</li>
                <li className='text-xs'>Pasula's Prime</li>
            </ul>
            
        </div>
        </div>
        <div className='bg-black text-center text-white p-1'>
            <p className='text-xs'>All copyrights are reserved to @Vinith Companies</p>
        </div>
    </div>
  )
}

export default Footer
