import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Listing from './Categories/Listing';
import {Link,Route,Switch} from 'react-router-dom';





export default class Users extends Component {
  constructor()
  {
    super();

    this.state={
      users:[]
    }
  }



  componentDidMount()
  {

    const response=axios.get('http://my_app.laravel/users')
    .then(response=>{
       this.setState({
         users:response.data

       });
    })

 }



    render() {


        return (






        <div>







      <div className="content">

      <table className="table">

<thead>
<tr>
 <th scope="col">#</th>
 <th scope="col">User E-mail</th>
 <th scope="col">Username</th>
 <th scope="col">User Created-At</th>
 <th scope="col">Updated-At</th>
 <th scope="col">Role</th>

</tr>
</thead>
<tbody>
{
    this.state.users.map(user=>{

return (
<tr key={user.id}>
 <th scope="row">{user.id}</th>
 <td>{user.email}</td>
 <td>{user.name}</td>
 <td>{user.created_at}</td>
 <td>{user.updated_at}</td>

 <td id="change" >{user.admin==1 ?(<a href="" className="btn btn-success">Admin</a>):(<a href=""  className="btn btn-warning">Normal</a>) }</td>

</tr> )

})
}
</tbody>

</table>



      </div>


  </div>






        );
    }
}
