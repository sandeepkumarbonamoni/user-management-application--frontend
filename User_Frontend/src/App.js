
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'
import ListUserComponent from './component/ListUserComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateUserComponent from './component/CreateUserComponent';
import UpdateUserComponent from './component/UpdateUserComponent';
import ViewUserComponent from './component/ViewUserComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <div>
       <BrowserRouter>
              <HeaderComponent />
                <div className="container">
                 
                    <Switch>
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/users" component = {ListUserComponent}></Route>
                          <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
                          { <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route> }
                          </Switch>
                         
                </div>

               
                </BrowserRouter>
     
    </div>
    
  );
}

export default App;

