import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



export default class Listing extends Component {

  constructor()
  {
    super();

    this.state={
      categories:[]
    }
  }


    componentDidMount()
    {

      const response=axios.get('http://my_app.laravel/categories')
      .then(response=>{
         this.setState({
           categories:response.data

         });
      })

   }

   onDelete (category_id)
{

  axios.delete('http://my_app.laravel/categories/delete/'+category_id)
 .then(response=>{

  let categories= this.state.categories;
  let index = categories.findIndex(category => category.id === category_id);
  categories.splice(index, 1);
  this.setState({
         categories:categories
     })
     .catch(error => {
       console.log(error);
     })




 // const isNotId = category => category.id !== category_id;
 //  const updatedTasks = this.state.categories.filter(isNotId);
 //
 //    this.setState({ categories: updatedTasks });
 //    axios.delete(`categories/delete/${category_id}`);


});


}


  render(){
    return (

      <div>







    <div className="content">

    <Link to="/categories" className="btn btn-primary">Listing</Link> &nbsp;
    <Link to="/categories/add" className="btn btn-secondary">Add</Link> &nbsp;

    <table className="table">

<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Category Name</th>
<th scope="col">Action</th>
<th scope="col">Edit&Delete</th>

</tr>

</thead>

<tbody>
{
  this.state.categories.map(category=>{

return (
<tr key={category.id}>
<th scope="row">{category.id}</th>
<td>{category.name}</td>
<td>{category.active==1 ?(<a href="" className="btn btn-success">Active</a>):(<a href=""  className="btn btn-warning">Not Using</a>) }</td>
<td>
      <Link to={`/categories/edit/${category.id}`}>Edit</Link> &nbsp; &nbsp;
      <a href="" className="btn btn-warning" onClick={() => this.onDelete(category.id)}>Delete</a>

      </td>


</tr> )

    })


}
</tbody>

</table>



    </div>




</div>

    )
  }
}
