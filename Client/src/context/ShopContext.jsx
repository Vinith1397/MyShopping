import {createContext} from 'react'
import {products} from '../assets/frontend_assets/assets.js'
export const ShopContext = createContext();
import { useState } from 'react'; 

export const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryCharge = 10;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState('')
    const value = {
        products,
        currency,
        deliveryCharge,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

