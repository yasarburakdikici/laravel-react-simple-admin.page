import React , { Component } from 'react';
import axios from 'axios';


export default class Add extends Component {

  constructor()
  {
    super();
    this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      category_name:''

    }
  }




  onChangeCategoryName(e)
    {
      this.setState({
          category_name:e.target.value
      });
    }



  onSubmit(e)
  {

    e.preventDefault();
    const category={
      category_name:this.state.category_name
    }

    axios.post('http://my_app.laravel/categories/store',category)
    .then(response=>{

      alert('Success');
       })
        .catch(error => {
         console.log(error.response);

        });


  }




   render(){
        return (

          <div className="content">

          <form onSubmit={this.onSubmit}>


<div className="form-group">
<label htmlFor="category_name">Category Name</label>
<input type="text" className="form-control" id="category_name" onChange={this.onChangeCategoryName} placeholder="Enter Category"/>


</div>

<button type="submit" className="btn btn-primary">Create New Category</button>
</form>

</div>



        );



   }


}
