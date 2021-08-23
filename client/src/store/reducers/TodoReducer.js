import * as at from "../actionTypes";
const initalState = {
    user: [],
}
export const TodoReducer = (state = { todoList: [] }, action) => {
    switch (action.type) {   
        case at.ADD_TODO_ACTION:
            return { todoList: [...state.todoList, action.payload] }
        case at.REMOVE_TODO_ACTION:
            return { todoList: state.todoList.length ? state.todoList.filter((d) => d.id !== action.payload.id) : [] };
        // case at.EDIT_TODO:
        case at.TOGGLE_TODO:
            return {
                todoList: state.todoList.length ? state.todoList.map((d) => {
                    if (d.id === action.payload.id) d.completed = !d.completed;
                    return d;
                }) : []
            }
        default:
            return state;
    }
}



export default TodoReducer;