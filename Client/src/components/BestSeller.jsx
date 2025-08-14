import React, { useEffect, useState } from 'react'
import Title from './Title'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestsellerProducts, setBestsellerProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {   
        try {
            if (products && products.length > 0) {
                const bestsellerProducts = products.filter(product => product.bestseller);
                setBestsellerProducts(bestsellerProducts.slice(0, 5));
            }
            setIsLoading(false);
        } catch (err) {
            setError('Failed to load products');
            console.error('Error loading products:', err);
            setIsLoading(false);
        }
    }, [products]); 
  return (
    <div className='my-10' >
    {/* BestSeller title */}
<div className='text-center py-8 text-3xl'>
<Title text1="Best" text2="Seller"/>
<p className='text-xs text-center'>Explore our bestseller collections before its gone</p>
</div>
{/* BestSeller products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-4'>
        {bestsellerProducts.map((product,index) => (
          <ProductItem 
            key={index} 
            id={product._id || product.id}
            image={product.image}   
            name={product.name} 
            price={product.price}
          />
        ))}

      </div>
    </div>
  )
}

export default BestSeller
