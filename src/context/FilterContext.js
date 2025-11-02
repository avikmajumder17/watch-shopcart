import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const filterInitialState = {
    productList: [],
    priceRange: {min: 0, max: 1000},
    manufacturer: null,
    color: null,
    size: null,
    sortBy: null
}

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initialProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }


    //price range

    function setPriceRange(min, max) {
        dispatch({
            type: "PRICE_RANGE",
            payload: {
                min: min,
                max: max
            }
        })
    }

    function filterPriceRange(products) {
        if (!state.priceRange) return products;

        const { min, max } = state.priceRange;

        return products.filter((product) => product.price >= min && product.price <= max);
    }


    //manufacturer

    function setManufacturer(manufacturer) {
        dispatch({
            type: "MANUFACTURER",
            payload: {
                manufacturer: manufacturer
            }
        })
    }

    function filterManufacturer(products) {
        if (!state.manufacturer) return products;
        return products.filter(product => product.manufacturer === state.manufacturer);
    }


    //color

    function setColor(color) {
        dispatch({
            type: "COLOR",
            payload: {
                color: color
            }
        })
    }

    function filterColor(products) {
        if (!state.color) return products;
        return products.filter(product => product.color === state.color);
    }


    //size

    function setSize(size) {
        dispatch({
            type: "SIZE",
            payload: {
                size: size
            }
        })
    }

    function filterSize(products) {
        if (!state.size) return products;
        return products.filter(product => product.size === state.size);
    }


    //sortby

    function setSortBy(sortBy) {
        dispatch({
            type: "SORT_BY",
            payload: {
                sortBy: sortBy
            }
        })
    }

    function filterSortBy(products) {
        if (state.sortBy === "pricelowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (state.sortBy === "pricehightolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        } else {
            return products;
        }
    }


    //reset filter

    function resetFilter() {
        dispatch({
            type: "RESET_FILTER"
        })
    }



    const filteredProductsList = filterSortBy(filterSize(filterColor(filterManufacturer(filterPriceRange(state.productList)))));


    const value = {
        state,
        productList: filteredProductsList,
        initialProductList,
        setPriceRange,
        setManufacturer,
        setColor,
        setSize,
        setSortBy,
        resetFilter
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);

    return context;
}