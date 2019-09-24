import React, { Component } from 'react';
import Users from './Users';
import Categories from './Categories/index';
import Add from './Categories/Add';
import Edit from './Categories/Edit';
import {Link,Route,Switch} from 'react-router-dom';



export default class Navbar extends Component {
  render(){
    return (

      <div id="container">




               <div  className="sidebar">
                   <ul id="nav">
                       <li>


                             <Link to="/users" className="btn btn-primary-xs">Users</Link> &nbsp;
                       </li>


                       <li>

                         <Link to="/categories" className="btn btn-primary-xs">Categories</Link> &nbsp;



                       </li>


                   </ul>

               </div>

               <Route exact path='/categories' component={Categories} />
               <Route exact path="/categories/add" component={Add} />
               <Route exact path="/categories/edit/:id" component={Edit} />
               <Route exact path="/users" component={Users} />


   </div>

    )
  }
}
