import React, {createContext} from "react";
import all_products from '../components/Assets/all_products'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const value = {all_products}

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider