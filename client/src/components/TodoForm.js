import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();
  const filterTodoList = () => {
    console.log("from filterTodoList");
  }
  
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <p></p>
      {/* TODO */}
      {/* ALL_FILTER ACTIVE_FILTER  COMPLETED_FILTER */}
      <button class="ui button" type="button" onClick={() => filterTodoList()}>All Item</button>
      <button class="ui button" type="button" onClick={() => filterTodoList()}>Active</button>
      <button class="ui button" type="button" onClick={() => filterTodoList()}>Completed</button>
    </form>
  );
};

export default TodoForm;
