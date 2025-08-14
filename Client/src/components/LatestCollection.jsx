import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products, currency } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (products && products.length > 0) {
                setLatestProducts(products.slice(0, 10));
            }
            setIsLoading(false);
        } catch (err) {
            setError('Failed to load products');
            console.error('Error loading products:', err);
            setIsLoading(false);
        }
    }, [products]); // Add products to dependency array

    if (isLoading) return <div className="text-center py-8">Loading products...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
    if (!latestProducts || latestProducts.length === 0) {
        return <div className="text-center py-8">No products available</div>;
    }

    return (
        <div className='w-full'>
            <div className='text-center py-8 text-3xl'>
                <Title text1="Latest" text2="Collections"/>
                <p className='outfit-regular text-xs text-center'>
                    Explore our latest collections of high-quality products
                </p>
            </div>
            {/* rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-4'>
                {latestProducts.map((product) => (
                    <ProductItem 
                        key={product._id || product.id} 
                        id={product._id || product.id}
                        image={product.image} 
                        name={product.name} 
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;