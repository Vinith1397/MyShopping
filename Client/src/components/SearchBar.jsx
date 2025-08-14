import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState,useEffect} from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,setShowSearch} = useContext(ShopContext);
    const [visible,setVisible]= useState('true')
    const location = useLocation();
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setShowSearch(true);
    }

    useEffect(()=>{
       if(location.pathname.includes('collections')){
        setVisible(true)
       }
       else{
        setVisible(false)
       }
},
  [location])
   
  return visible ? (
    <div className='flex items-center space-x-1 ml-2'>
      <img className='w-4 h-4 ml-2 cursor-pointer' src={assets.search_icon} alt="Search" onClick={handleSearchSubmit}/>
      <input className='w-64' type = "text" placeholder = "Search" value ={search} onChange={handleSearchChange}/>
    </div>
  ): null
}

export default SearchBar    
