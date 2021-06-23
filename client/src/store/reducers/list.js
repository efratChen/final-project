import * as actionTypes from "../actionTypes";
const initalState = {
    user: [],
}
export const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes._ADDED:
            return { ...state };
        case actionTypes.CAKE_DELETED:
            let arr = state.cakesArr.filter(item => item._id !== action.payload)
            return { ...state, cakesArr: arr };
        case actionTypes.CAKES_SAVED:
            return { ...state, cakesArr: [...action.payload] };
    }
    return state;
}