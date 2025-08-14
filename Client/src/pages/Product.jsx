import React, { useContext,useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {

  const ProductId = useParams();
  const {products}  = useContext(ShopContext)
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [size,setSize] = useState('')
  const [color,setColor] = useState('')
  const [quantity,setQuantity] = useState('')

  const fetchProduct = ()=>{
      products.find((p)=>{
        if(p._id === ProductId.product){
          setProductData(p)
          setImage(p.image[0])
        } 
      })
  }
  
useEffect(()=>{
  fetchProduct()
},[ProductId])

useEffect(()=>{
  console.log(productData)
},[productData])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity gap-2'>
      {/*Display Product data*/}
      <div className='flex flex-row gap-2 mb-5 ml-34'>
        <p className="text-sm text-gray-600">
          Clothing, Shoes & Jewelry &nbsp;&rsaquo;&nbsp;
          {productData.category} &nbsp;&rsaquo;&nbsp;
          {productData.subCategory}
        </p>
      </div>

      <div className = "flex flex-col-reverse md:flex-row gap-6">
      {/*Display Product images*/}
      <div className="flex ">
        <div className= 'flex sm:flex-col justify-between sm:justify-normal overflow-x-auto sm:overflow-y-auto w-[28%]'>
          {productData.image.map((val,index)=>{
            return <img src={val} key={index}  onClick={()=>setImage(val)} className='w-[58%] flex-shrink-0 cursor-pointer mb-2 rounded-xl border-1'  alt=''/>
          })
          }</div>
          <div className="w-full">
            <img src={image} className=" w-full h-auto "></img>
          </div>
      </div>
      {/* Right: Product Info */}
    {/* <div className='md:w-1/2 flex flex-col justify-start gap-2'>
      <h1 className='text-2xl font-medium prata-regular'>{productData.name}</h1>
      <p className='text-gray-700'>{productData.description}</p>
      <p className='text-sm text-blue-700 underline'> visit the vendor page</p>
      <p className='text-lg font-bold text-green-600 '>${productData.price}</p>

    </div> */}

  <div className='md:w-1/2 flex flex-col justify-start gap-2'>
    {/* Product Title */}
    <h1 className='text-2xl font-medium'>{productData.name}</h1>

    {/* Vendor Link */}
    <p className='text-sm text-blue-700 underline cursor-pointer'>Visit the {productData.vendor || "Vendor"} Store</p>

    {/* Ratings + Reviews */}
    <div className='flex items-center gap-2 text-sm'>
      <span className='text-yellow-500'>★★★★☆</span>
      <span className='text-gray-600'>(4,619)</span>
    </div>

    {/* Badge */}

    <div className="flex flex-row gap-2">
    <span className='bg-black text-white text-xs px-2 py-1 w-fit rounded'>Store's Choice</span>

    {productData.bestseller ? (
  <span className='bg-black text-white text-xs px-2 py-1 w-fit rounded'>Best Seller</span>
) : null}
   </div>
    
    {/* Price Section */}
    <div className='flex items-center gap-4 mt-2'>
      <p className='text-3xl font-bold text-gray-800'>${productData.price}</p>
      <span className='bg-pink-100 text-red-500 text-sm px-2 py-1 rounded'>
        Price increase
      </span>
      <span className='bg-green-100 text-green-600 text-sm px-2 py-1 rounded'>
        Save $16.48
      </span>
    </div>

    {/* EMI Plan */}
    <p className='text-sm text-gray-600'>
      Or <span className='text-green-600 font-semibold'>$18.46/mo</span> (6 mo). Select from 2 plans
    </p>

    {/* Prime & Returns */}
    <div className='text-sm'>
      <p className='text-blue-600 font-semibold'>Club member</p>
      <p className='text-gray-600'>Two-Day <span className='underline cursor-pointer'>FREE Returns</span></p>
    </div>

    {/* Prime Card Offer */}
    <p className='text-xs text-blue-800 mt-1'>
      Thank you for being a Gold Club member. Get $150 off: Pay <span className='font-bold text-black'>$0.00</span>. 
      <span className='line-through'>$99.99</span> upon approval for Prime Visa.
    </p>
 {/* Color Selector */}
 <div className='mt-2'>
      <p className='text-sm'>Color: <span className='font-medium'>{color}</span></p>
      <div className='flex gap-2 mt-1'>
        <div onClick = {()=>setColor('mint')} className='w-6 h-6 rounded border-2 border-gray-300 bg-green-200 cursor-pointer '></div>
        <div onClick = {()=>setColor('purple')} className='w-6 h-6 rounded border-2 border-gray-300 bg-purple-300 cursor-pointer'></div>
      </div>
    </div>

    {/* Size Selector */}
    <div className='mt-2'>
      <p className='text-sm'>Size: <span className='font-medium'> {size}</span></p>
      <div className='flex gap-2 mt-1'>
        {productData.sizes.map((s,i)=>
        <button onClick = {()=>setSize(s)}className={` w-6 h-6 rounded border-1 bg-grey-100 border-gray-300  cursor-pointer ${ s === size ? 'bg-blue-500' : ''}`} key={i}>{s}</button> 
        )}      
      </div>
    </div>
         {/* Product description */}
  <p className='text-xl font-medium text-gray-700'>{productData.description}</p>

  <p className='text-sm text-blue-700 underline cursor-pointer' >See more about the product<span className='text-md'>&rsaquo;&rsaquo;</span></p>
  <select
  value={quantity}
  onChange={(e) => setQuantity(parseInt(e.target.value))}
  className="border px-2 py-1 rounded w-[30%] h-auto "
>
  {Array.from({ length: 30 }, (_, i) => (
    <option key={i} value={i + 1}>
      Quantity:{i + 1}
    </option>
  ))}
</select>
<div className = "flex flex-row gap-5">
  <button className='bg-black text-white p-2 w-[30%] h-auto rounded-xl active:bg-blue-500'>Add to Cart</button>
  <button className='bg-black text-white p-2 w-[30%] h-auto rounded-xl active:bg-blue-500'>Buy now</button>
</div>
  </div>
      </div>
      <div>
        <RelatedProducts category = {productData.category} subCategory  = {productData.subCategory} />
      </div>
    </div>
  ) : <div className = ""> 
  <p>There is no product</p>
  </div>
}

export default Product
