import React from 'react';
import { assets } from '../assets/frontend_assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
import { useState,useEffect} from 'react'
import SearchBar from './SearchBar.jsx';



const Navbar = () => {
const [visible,setVisible] = useState(false)
  return (
    <nav className="bg-white shadow-lg">
      <div className="w-full flex items-center h-16 justify-between">
          {/* Logo */}
          <Link to="/">
          <div className="flex-shrink-0 pl-4 sm:pl-6 lg:pl-8">
            <img src={assets.logo} className="h-14 w-auto " alt="Logo" />
          </div>
          </Link>
          
          {/* Navigation Links */}
          <div className='flex items-center mr-6 justify-center'>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'border-b-2 border-indigo-500 text-gray-900' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'border-b-2 border-indigo-500 text-gray-900' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/collections" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'border-b-2 border-indigo-500 text-gray-900' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              Collections
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'border-b-2 border-indigo-500 text-gray-900' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <SearchBar/>       
          {/* Right side buttons */}
          <div className="flex items-center space-x-4 ml-2">
          <div className="relative group">
            <img className='w-4 h-4 mr-2 cursor-pointer' src={assets.profile_icon} alt="Profile"/>
            <div className='group-hover:block hidden absolute dropdown-menu right-0  z-50 w-48 origin-top-right bg-white rounded-md shadow-lg py-1'>
              <p className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'> My Profile</p>
              <p className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'> Orders</p>
              <p className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>Payment Methods</p>
              <p className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>Logout</p>
            </div> 
            </div>
            <div className="relative">
            <Link to="/cart" className="relative">
            <img className='w-5 h-5 mr-2 cursor-pointer' src={assets.cart_icon} alt="Cart"/>
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
            </span>
            </Link>
            </div>
            <div>
              <img  onClick={()=>{ setVisible(true)}}className='w-5 h-5 mr-2 sm:hidden cursor-pointer' src={assets.menu_icon} alt="Menu"/>
            </div>
            {/* Mobile Menu */}
            {visible && (
              <div className='absolute top-0 right-0 bottom-0 w-full h-full overflow-hidden transition-all bg-white'>
                <div  onClick={()=>{ setVisible(false)}}className='flex flex-col text-gray-600 cursor-pointer'>
                  <div className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back"/>
                  <p className='text-sm font-medium border-b-1 border-gray-200 pl-2'>Back</p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <NavLink to="/" onClick ={()=>{setVisible(false)}}className = 'py-2 pl-2 border-b-1 border-gray-200'>
                    Home
                  </NavLink>  
                  <NavLink to="/about" onClick ={()=>{setVisible(false)}} className = 'py-2 pl-2 border-b-1 border-gray-200'>
                    About
                  </NavLink>
                  <NavLink to="/collections" onClick ={()=>{setVisible(false)}} className = 'py-2 pl-2 border-b-1 border-gray-200'>
                    Collections
                  </NavLink>
                  <NavLink to="/contact" onClick ={()=>{setVisible(false)}} className = 'py-2 pl-2 border-b-1 border-gray-200'>
                    Contact
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
   
      </div>
    </nav>
  );
};

export default Navbar;