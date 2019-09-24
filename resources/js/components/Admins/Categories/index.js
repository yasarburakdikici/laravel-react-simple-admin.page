import React , { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Edit from './Edit';
import Listing from './Listing';
import Add from './Add';

export default class index extends Component
{
  render(){
    return (

        <div>




             <div>
          



               <Route exact path="/categories" component={Listing} />
               <Route exact path="/category/add" component={Add} />
               <Route exact path="/category/edit/:id" component={Edit} />

             </div>








        </div>



    );
  }
}
