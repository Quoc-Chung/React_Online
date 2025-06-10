import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  isLogin: false,
  isAdmin: false,
  user: null,
};

export const AuthenReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        isAdmin: action.payload.isAdmin,
        user: action.payload.user,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};