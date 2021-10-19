import * as at from "../actionTypes";
const initalState = {
    user: [],
}

export const TodoReducer = (state = { todoList: [] }, action) => {
    switch (action.type) {
        //filter- check if to put it here :
        case at.ALL_FILTER:
            // return { todoList: [todoList, action.payload] }
        case at.ACTIVE_FILTER:
            return { todoList: [...state.todoList, action.payload] }
        case at.COMPLETED_FILTER:
            return { todoList: [...state.todoList, action.payload] }
        //   
        case at.ADD_TODO_ACTION:
            return { todoList: [...state.todoList, action.payload] }
        case at.REMOVE_TODO_ACTION:
            return { todoList: state.todoList.length ? state.todoList.filter((d) => d.id !== action.payload.id) : [] };
        case at.UPDATE_TODO_ACTION:
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