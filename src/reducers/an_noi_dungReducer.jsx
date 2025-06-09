// reducers/an_noi_dungReducer.js
import { ANNoiDung } from "../actions/an_noi_dung";

const initial_State = {
    status: true
};

export const an_noi_dungReducer = (state = initial_State, action) => {
    switch (action.type) {
        case ANNoiDung:
            return {
                ...state,
                status:false,
            };
        default:
            return state;
    }
};
