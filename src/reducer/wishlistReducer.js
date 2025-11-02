export const wishlistReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case "ADD_TO_WISHLIST":
            return {...state, productsWishlist: payload.product};

        case "REMOVE_FROM_WISHLIST":
            return {...state, productsWishlist: payload.product};

        case "TOTAL":
            return {...state, total: payload.total};

        default:            
            throw new Error("No case found!");
    }
}