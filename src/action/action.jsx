export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET  = 'RESET';

export const tang_gia_tri = () => {
    return { type: INCREMENT }; 
}

export const giam_gia_tri = () => {
    return { type: DECREMENT }; 
}

export const reset = () => {
    return { type: RESET }; 
}

