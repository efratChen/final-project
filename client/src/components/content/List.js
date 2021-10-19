import './list.css';
const List = (props) => {
//   TODO completed line through to work well 
//  MyError2 - it works just at the 2 first times 
// 
    const completed = () => {
        return (props.list.completed == true ? "completed" : null);
    }
 const {id,title}=props.list;
    return (<>
    {/* must bind - to call markComplete on Click !!*/}
    {/*  */}
        <p  className={completed()}> <input type="checkbox" onClick={props.markComplete.bind(this,id)} />
        {' '}
            {/* className="list" */}
            {(title)}
            <button onClick={props.delTodo.bind(this,id)}  className="btnStyle">x</button>
            </p>
    </>);
}

export default List;