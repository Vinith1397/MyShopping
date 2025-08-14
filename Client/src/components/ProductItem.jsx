import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)

  return (
    <div>
    <Link to={`/product/${id}`} className='cursor-pointer text-gray-900 hover:text-gray-600'>
    <div className=' overflow-hidden'> 
        <img src={image[0]} className='hover:scale-110 transition-all ease-in-out border-2 border-gray-200' alt="product"/>
    </div>
    <p className='text-sm pt-2 pb-1 font-medium'>{name}</p>
    <p className='text-sm pt-1 pb-2 font-medium'>{currency}{price}</p>
    </Link>
    </div>
  )
}

export default ProductItem
