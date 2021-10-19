import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from '../utils/Common';

import Login from '../components/content/user/enter/LogIn2';
import Dashboard from '../components/content/user/enter/Dashboard';
import Home from '../components/content/user/enter/Home';import LogIn from './content/user/enter/LogIn';
;


function App() {
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:3000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
       <LogIn/>

      </BrowserRouter>
    </div>
  );
}

export default App;



















// import { useState } from 'react';
// import 'semantic-ui-css/semantic.min.css';
// import Lists from './content/Lists';
// import Category from "./content/Category";
// import LogIn from './content/user/enter/LogIn2';
// import Dashboard from './content/user/enter/Dashboard';
// import LoginForm from './content/user/enter/LogIn2';
// import SignUp from './content/user/enter/SignUp';
// import FixedMenuLayout from './content/FixedMenuLayout';
// import AddToDo from './content/AddToDo';
// import { Route, BrowserRouter as Router, NavLink, BrowserRouter } from 'react-router-dom';
// // 1
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Typography from '@material-ui/core/Typography';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';
// import useTodoState from './useTodoState';
// import './styles.css';
// import LogIn2 from './content/user/enter/LogIn2';
// import { Switch } from '@material-ui/core';
// //2
// const App = (props) => {
//   const { todos, addTodo, deleteTodo } = useTodoState([]);

//   // let [allLists, setAllLists] = useState([
//   //   {
//   //     id: 1,
//   //     title: 'Take out the trush',
//   //     completed: false
//   //   }, {
//   //     id: 2,
//   //     title: 'Take a shower',
//   //     completed: true
//   //   }
//   // ]);
//   //#region toggle complete myError2
//   // const markComplete = (id) => {
//   //   console.log( "from app.js "+id);
//   //   setAllLists(
//   //     allLists => allLists.map(list => {
//   //       if (list.id === id) {
//   //         list.completed = !list.completed
//   //       }
//   //       console.log(list.id + " * " + list.completed);
//   //       return list;
//   //     })
//   //   )
//   // }
//   //#endregion 
//   //#region delete task list
//   const Addtodo = (title) => {
//     console.log(title);
//   }
//   // const delTodo = (id) => {
//   //   console.log("del "+id);
//   //   setAllLists(allLists = allLists.filter(todo =>
//   //     todo.id != id));
//   // }
//   //#endregion
//   return (<>
//     <div className="App">
//       <BrowserRouter>
//         <div>
//           <div className="header">
//             <NavLink exact activeClassName="active" to="/">Home</NavLink>
//             <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
//             <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
//           </div>
//           <div className="content">
//             <Switch>
//               {/* <Route exact path="/" component={Home} /> */}
//               <Route path="/login" component={LogIn} />
//               <Route path="/dashboard" component={Dashboard} />
//             </Switch>
//           </div>
//         </div>
//       </BrowserRouter>




//       {/*  <Typography component="h1" variant="h2">
//           Todos
//       </Typography>
//         <TodoForm
//           saveTodo={todoText => {
//             const trimmedText = todoText.trim();
//             if (trimmedText.length > 0) {
//               addTodo(trimmedText);
//             }
//           }}
//         /> */}
//       {/* <TodoList todos={todos} deleteTodo={deleteTodo} /> */}
//       {/* <AddToDo Addtodo={Addtodo}/> */}
//       <FixedMenuLayout />
//       {/* <LogIn/> */}
//       {/* <LoginForm/> */}
//       {/* <SignUp/> */}
//       <LogIn2 />
//     </div>

//     {/* <Lists allLists={allLists} markComplete={markComplete} delTodo={delTodo}/> */}
//   </>)
// }

// export default App;














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
//       <Route path="/Category" component={Category}>     </Route>

//     </Switch>
//   // </Router>

//     // <div className="App">
//     //   <LogIn></LogIn>
//     // </div>
//   // );
// }


// export default App;
