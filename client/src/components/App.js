import './App.css';
import ListCategory from './ListCategory';
import Category from './Category';
import { createStore } from 'redux';
import React from 'react';
import {Provider} from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
// import { reducer } from "./";
import { history } from '../utils/history';
import LogIn from './LogIn'
import HomePage from './HomePage';

function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ cakesPart: cakeReducer }), composeEnhancers(

  applyMiddleware(thunk))
)
  return (
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    ));
  <Router history={history}>
    <nav>

      <Link to="/Category">categories</Link>
    </nav>
         
     <Switch>
       {/* soon it will be modal fall down */}
       <Route exact path={["/","/LogIn"]} component={HomePage}>
       </Route>
       <Route path="/Category" component={Category}>
       </Route>

     </Switch>
   </Router>

  //   <div className="App">
  //     <LogIn></LogIn>
  //   </div>
  // );
}


export default App;

