export const filterReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        
        case "PRODUCT_LIST":
            return { ...state, productList: payload.products };

        case "PRICE_RANGE":
            return { ...state, priceRange: {min: payload.min, max:payload.max} };

        case "MANUFACTURER":
            return { ...state, manufacturer: payload.manufacturer };

        case "COLOR":
            return { ...state, color: payload.color };

        case "SIZE":
            return { ...state, size: payload.size };

        case "SORT_BY":
            return { ...state, sortBy: payload.sortBy }

        case "RESET_FILTER":
            return {
                ...state,
                priceRange: {min: 0, max: 1000},
                manufacturer: null,
                color: null,
                size: null,
                sortBy: null
            }

        default:
            throw new Error("No Case Found!");
    }
}