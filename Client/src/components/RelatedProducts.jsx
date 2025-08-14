import React, { useEffect,useContext,useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'


const RelatedProducts = ({category,subCategory}) => {
    const {products} = useContext(ShopContext)
    const productsCopy = [...products]
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        setRelatedProducts(
          productsCopy.filter(
            (p) => p.category === category && p.subCategory === subCategory
          )
        );
      }, [products, category, subCategory]);
  return (
    <div className='w-full' >
        <div className='text-center py-8 text-3xl'>
                <Title text1= 'Realted' text2='Products'/>
                <p className='outfit-regular text-xs text-center'>
                    Products Related to Your Interest
                </p>
            </div>
    <div className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-4'>
        {relatedProducts.map((p)=>{

            return <ProductItem key={p._id} id={p._id} image={p.image}  name={p.name} price = {p.price} ></ProductItem>
        })}
    </div>
    </div>
  )
}

export default RelatedProducts
