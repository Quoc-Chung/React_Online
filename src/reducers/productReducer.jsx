import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from "../actions/types";

const initial_products = {
    products: [],
    total: 0
}

export const productReducer = (state = initial_products , action) => {
  switch (action.type) {
      case ADD_TO_CART:
         return { ...state, products: [...state.products, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, products: state.products.filter(t => t.id !== action.payload) };

    case CALCULATE_TOTAL:
      return { ...state, total: state.products.reduce((sum, product) => sum + product.price, 0)};
    default:
      return state;
  }
}


