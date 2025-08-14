import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";    
import { useState } from "react";
import ProductItem from "../components/ProductItem";

const Collections = () => { 

const {products} = useContext(ShopContext);
const [filteredProducts,setFilteredProducts] = useState([])
const [category,setCategory] = useState([])
const [subCategory,setSubCategory] = useState([])
const [size,setSize] = useState([])
const [sortOption,setSortOption] = useState('All')
const {search} = useContext(ShopContext);

const handleSortChange = (e) =>{
  setSortOption(e.target.value)
}

const toggleCategory = (e) => {
  if(category.includes(e.target.value)){
    setCategory(prev => prev.filter(item => item !== e.target.value));
  }else{
    setCategory(prev => [...prev, e.target.value]);
  }
}
const toggleSubCategory = (e) => {
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev => prev.filter(item => item !== e.target.value));
  }else{
    setSubCategory(prev => [...prev, e.target.value]);
  }
}
const togglesize = (e) => {
  if(size.includes(e.target.value)){
    setSize(prev => prev.filter(item => item !== e.target.value));
  }else{
    setSize(prev => [...prev, e.target.value]);
  }
}

const applyFilter = ()=>{
  let productscopy = products.slice();
  if(search){

    productscopy = productscopy.filter(product => product.category?.toLowerCase().includes(search.toLowerCase()) || product.subCategory?.toLowerCase().includes(search.toLowerCase()) || product.name?.toLowerCase().includes(search.toLowerCase()));
    console.log("🔍 Filtered products after search:", productscopy);
  }
  if(category.length > 0){
    productscopy = productscopy.filter(product => category.includes(product.category));
  }

  if(subCategory.length > 0){
    productscopy = productscopy.filter(product => subCategory.includes(product.subCategory));
  }

  if(size.length > 0){
    productscopy = productscopy.filter(product => size.some(selectedsize =>  product.sizes && product.sizes.includes(selectedsize)));
  }

  setFilteredProducts(productscopy);

}

const sortProducts = () =>{
  let filteredproductscopy = filteredProducts.slice();
 switch(sortOption){
  case 'priceLowToHigh':
  setFilteredProducts(filteredproductscopy.sort((a,b) => a.price - b.price));
    break;
  case 'priceHighToLow':
  setFilteredProducts(filteredproductscopy.sort((a,b) => b.price - a.price));
    break;
  case 'ratingHighToLow':
  setFilteredProducts(filteredproductscopy.sort((a,b) => b.rating - a.rating));
    break;
  case 'ratingLowToHigh':
  setFilteredProducts(filteredproductscopy.sort((a,b) => a.rating - b.rating));
    break;
  case 'arrivalNewToOld':
  setFilteredProducts(filteredproductscopy.sort((a,b) => b.date - a.date));
    break;
  case 'arrivalOldToNew':
  setFilteredProducts(filteredproductscopy.sort((a,b) => a.date - b.date));
    break;
  default:
    applyFilter();
    break;
 }
}

useEffect(() => {
  console.log("🔁 search changed:", search);
  applyFilter(); 
}, [category,subCategory,size,search]);
useEffect(() => {
  sortProducts();
}, [sortOption]);

  return (
    <div className = "flex flex-row sm:flex:row gap-1 sm:gap-10 pt-10 border-t">
       {/* Filter Options*/}
        <div className = "flex flex-col ml-4 mt-4 sm:mt-0">
        <p className = "text-2xl font-bold prata-regular">FILTERS</p>
        <div className= 'flex flex-col gap-2 border-gray-400 border-1 p-2 mt-4 '>
          <span className="font-medium prata-regular">Categories</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="men" className="h-4 w-4 text-gray-500" value="Men" onChange={toggleCategory}/>
              <label htmlFor="men" className="text-gray-500 outfit-regular">Men</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="women" className="h-4 w-4 text-gray-500" value="Women" onChange={toggleCategory}/>
              <label htmlFor="women" className="text-gray-500 outfit-regular">Women</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="kids" className="h-4 w-4 text-gray-500" value="Kids" onChange={toggleCategory}/>
              <label htmlFor="kids" className="text-gray-500 outfit-regular">Kids</label>
            </div>
          </div>
        </div>

        <div className= 'flex flex-col gap-2 border-gray-400 border-1 p-2 mt-4'>
          <span className="font-medium prata-regular">Types</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="men" className="h-4 w-4 text-gray-500" value="Topwear" onChange={toggleSubCategory}/>
              <label htmlFor="men" className="text-gray-500 outfit-regular">Topwear</label>
            </div>  
            <div className="flex items-center gap-2"> 
              <input type="checkbox" id="women" className="h-4 w-4 text-gray-500" value="Bottomwear" onChange={toggleSubCategory}/>
              <label htmlFor="women" className="text-gray-500 outfit-regular">Bottomwear</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="kids" className="h-4 w-4 text-gray-500" value="Footwear" onChange={toggleSubCategory}/>
              <label htmlFor="kids" className="text-gray-500 outfit-regular">Footwear</label>
            </div>
          </div>
        </div>

        <div className= 'flex flex-col gap-2 border-gray-400 border-1 p-2 mt-4'>
          <span className="font-medium prata-regular">Colors</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="men" className="h-4 w-4 text-gray-500" />
              <label htmlFor="men" className="text-gray-500 outfit-regular">Red</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="women" className="h-4 w-4 text-gray-500" />
              <label htmlFor="women" className="text-gray-500 outfit-regular">Blue</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="kids" className="h-4 w-4 text-gray-500" />
              <label htmlFor="kids" className="text-gray-500 outfit-regular">Black</label>
            </div>
          </div>
        </div>

        <div className= 'flex flex-col gap-2 border-gray-400 border-1 p-2 mt-4'>
          <span className="font-medium prata-regular">Sizes</span>
          <div className="flex flex-col gap-2">   
            <div className="flex items-center gap-2 text-gray-500" >
              <input type="checkbox" id="size-s" className="h-4 w-4 text-gray-500" value="S" onChange={togglesize}/>
              <label htmlFor="size-s"   className="text-gray-500 outfit-regular">S</label>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" id="size-m" className="h-4 w-4 text-gray-500" value="M" onChange={togglesize}/>
              <label htmlFor="size-m" className="text-gray-500 outfit-regular">M  </label>
            </div>  
            <div className="flex items-center gap-2 text-gray-500">  
              <input type="checkbox" id="size-l" className="h-4 w-4 text-gray-500" value="L" onChange={togglesize}/>
              <label htmlFor="size-l" className="text-gray-500 outfit-regular">L</label>
            </div>
            <div className="flex items-center gap-2 text-gray-500">       
              <input type="checkbox" id="size-xl" className="h-4 w-4 text-gray-500" value="XL" onChange={togglesize}/>
              <label htmlFor="size-xl" className="text-gray-500 outfit-regular">XL</label>
            </div>
          </div>
        </div>

      </div>
      {/* Products dispaly right side*/}
      <div className = "w-full ml-4 mt-4 sm:mt-0">  
        <div className = "flex flex-row text-center text-3xl ml-4 justify-between">
        <Title text1="Explore" text2="Collections"/>
        <div className = "flex items-center align-center ml-4">
          <p className = "text-gray-900 text-xs font-medium ">Sort By :</p>
          <div className="relative mb-2">
          <select type='dropdown' onChange={handleSortChange} label="Sort" className = "text-gray-900 text-xs font-medium mb-2 ">
            <option value="All">All</option>
          <option value="priceLowToHigh">Price: Low to High </option> 
          <option value="priceHighToLow">Price: High to Low</option> 
          <option value="ratingHighToLow">Rating: High to Low</option> 
          <option value="ratingLowToHigh">Rating: Low to High</option> 
          <option value="arrivalNewToOld">Arrival: New to Old</option> 
          <option value="arrivalOldToNew">Arrival: Old to New</option> 
          </select>
          </div>
        </div>
        </div>
        
        {/* rendering products */}
        <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-4">
        {filteredProducts.map((product) => (
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
    </div>
  )
}

export default Collections
