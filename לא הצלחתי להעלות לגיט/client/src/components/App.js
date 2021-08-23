import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Lists from './content/Lists';
import LogIn from './content/user/enter/LogIn';
import LoginForm from './content/user/enter/LogIn2';
import SignUp from './content/user/enter/SignUp';
import FixedMenuLayout from './header/Header';
import AddToDo from './content/AddToDo';
import { Route, BrowserRouter as router } from 'react-router-dom'; 
const App = (props) => {
  let [allLists, setAllLists] = useState([
    {
      id: 1,
      title: 'Take out the trush',
      completed: false
    }, {
      id: 2,
      title: 'Take a shower',
      completed: true
    }
  ]);
  //#region toggle complete myError2
  const markComplete = (id) => {
    console.log( "from app.js "+id);
    setAllLists(
      allLists => allLists.map(list => {
        if (list.id === id) {
          list.completed = !list.completed
        }
        console.log(list.id + " * " + list.completed);
        return list;
      })
    )
  }
  //#endregion 
  //#region delete task list
  const Addtodo=(title)=>{
    console.log(title);
  }
  const delTodo = (id) => {
    console.log("del "+id);
    setAllLists(allLists = allLists.filter(todo =>
      todo.id != id));
  }
  //#endregion
  return (<>
  {/* <AddToDo Addtodo={Addtodo}/> */}
    <FixedMenuLayout />
    {/* <LoginForm/> */}
    {/* <SignUp/> */}
    {/* <LogIn /> */}
    {/* <Lists allLists={allLists} markComplete={markComplete} delTodo={delTodo}/> */}
  </>)
}

export default App;














// // import './App.css';
// import {Provider} from 'react-redux'

// import ListCategory from './ListCategory';
// import Category from './Category';
// import { createStore } from 'redux';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { history } from '../utils/history';
// import LogIn from './LogIn'
// import HomePage from './HomePage';
// // import {  } from "module";
// import reducer from "../store/reducers/list";
// function App() {
//   return (

//     // ReactDOM.render(
//       <React.StrictMode>
//         <Provider store={createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
//         <HomePage/>
//         <LogIn/>
//           {/* <App /> */}
//         </Provider>
//       </React.StrictMode>,
//       document.getElementById('root')
//     );
//   // <Router history={history}>
//   //   <nav>

//   //     <Link to="/Category">categories</Link>
//   //   </nav>

//     <Switch>
//       {/* soon it will be modal fall down */}
//       <Route exact path={["/","/LogIn"]} component={HomePage}>
//       </Route>
//       <Route path="/Category" component={Category}>
//       </Route>

//     </Switch>
//   // </Router>

//     // <div className="App">
//     //   <LogIn></LogIn>
//     // </div>
//   // );
// }


// export default App;
