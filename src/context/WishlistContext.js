import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";

const initialWishlist = {
    productsWishlist: [],
    total: 0
};

export const WishlistContext = createContext(initialWishlist);

export const WishlistProvider = ({children}) => {
    const [state, dispatch] = useReducer(wishlistReducer, initialWishlist);

    function setWishlistProducts(product) {
        const updatedWishlist = state.productsWishlist.concat(product);

        return updatedWishlist;
    }

    function addToWishlist(product) {
        const updatedWishlist = setWishlistProducts(product);

        dispatch({
            type: "ADD_TO_WISHLIST",
            payload: {
                product: updatedWishlist
            }
        })
    }
    

    function setRemoveFromWishlistProducts(product) {
        const updatedWishlist = state.productsWishlist.filter(item => item.id !== product.id);

        return updatedWishlist;
    }

    function removeFromWishlist(product) {
        const updatedWishlist = setRemoveFromWishlistProducts(product);

        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: {
                product: updatedWishlist
            }
        })
    }


    const value = {
        productsWishlist: state.productsWishlist,
        total: 0,
        addToWishlist,
        removeFromWishlist
    }

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => {
    const context = useContext(WishlistContext);

    return context;
}