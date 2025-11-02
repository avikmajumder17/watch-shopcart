import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialCartListState = {
    cartList: [],
    total: 0
}

export const CartContext = createContext(initialCartListState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartListState);

    //add to cart

    function setAddToCartList(product) {
        const updatedCartList = state.cartList.concat(product);

        return updatedCartList;
    }

    function addToCart(product) {
        const updatedCartList = setAddToCartList(product);

        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                product: updatedCartList,
                total: updatedTotal
            }
        })
    }


    //remove from cart

    function setRemoveFromCartList(product) {
        const updatedCartList = state.cartList.filter(cartListProduct => cartListProduct.id !== product.id);

        return updatedCartList;
    }

    function removeFromCart(product) {
        const updatedCartList = setRemoveFromCartList(product);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                product: updatedCartList,
                total: updatedTotal
            }
        })
    }


    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);

    return context;
}