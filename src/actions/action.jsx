import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from "./types";

export const them_san_pham = (product) =>{
    return {
        type: ADD_TO_CART, 
        payload : product
    }
}

export const xoa_san_pham = (id) => {
    return {
        type :REMOVE_FROM_CART,
        payload: id
    }
}

export const tinh_tong_tien  = () => {
    return {
        type: CALCULATE_TOTAL
    }
}