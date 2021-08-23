import * as at from "../actionTypes";
const initalState = {
    user: [],
}

const completedFilter=(state)=>
{
    let todoList = [];
    state.todoList.map((d) => {
        if (d.completed === true) todoList.push(d)
    })
    return todoList;
}
export const FilterReducer = (state = { todoList: [] }, action) => {
    switch (action.type) {
        case at.ALL_FILTER:
            return state;
        case at.ACTIVE_FILTER:
            return state.filter((d) => !d.completed);
        case at.COMPLETED_FILTER:
            return state.filter((d) => d.completed);           
        default:
            return state;
    }
}



export default FilterReducer;