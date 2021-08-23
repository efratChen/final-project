import List from "./List";

const Lists = (props) => {
 
    return ( <>
    <h1>Lists</h1>
    {props.allLists.map((list)=>(
        <List key={list.id} list={list} markComplete={props.markComplete} delTodo={props.delTodo}/>
    ))}
    </>  );
}
 
export default Lists;