// import * as actionTypes from ".../";
const initalState = {
    user: [],
}
 const userReducer = (state = initalState, action) => {
    // switch (action.type) {
    //     case actionTypes._ADDED:
    //         return { ...state };
    //     case actionTypes.CAKE_DELETED:
    //         let arr = state.cakesArr.filter(item => item._id !== action.payload)
    //         return { ...state, cakesArr: arr };
    //     case actionTypes.CAKES_SAVED:
    //         return { ...state, cakesArr: [...action.payload] };
    // }
    return state;
}
export default userReducer;