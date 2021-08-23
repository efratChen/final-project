import { useState } from 'react';
import './list.css';
// myError3 put object object in DOM 
const AddToDo = (props) => {
    let [title,setTitle]=useState('');
    const onChange=(e)=>{
        setTitle(e.target.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        props.Addtodo(title)
        setTitle({title:' '})
    }
    return (<>
        <input type="text" name="title" value={title} onChange={onChange} placeholder="Add Todo..." />
        <input type="button" onClick={onSubmit} value="submit" className="btn" />
    </>);
}

export default AddToDo;