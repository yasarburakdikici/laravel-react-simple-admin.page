import React , { Component } from 'react';
import axios from 'axios';


export default class Edit extends Component {

  constructor(props)
  {

    super(props);

    this.onChangeCategoryName=this.onChangeCategoryName.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      category_name: ''

    }
  }

  componentDidMount ()  {


      axios.put('http://my_app.laravel/categories/edit/'+this.props.match.params.id)
      .then(response=>{
        this.setState({category_name:response.data.name});

      })
      .catch(error => {
       alert(error);

      });

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

    axios.put('http://my_app.laravel/categories/update/'+this.props.match.params.id,category)
    .then(res=>{
      alert('success')

    })
    .catch(error => {
     alert(error);

    });

  }




   render(){

        return (

                <div className="content">




               <form onSubmit={this.onSubmit}>




 <div className="form-group">
   <label htmlFor="category_name">Category Name</label>
   <input type="text" className="form-control" id="this.state.category_id" value={this.state.category_name} onChange={this.onChangeCategoryName}  />

 </div>



 <button type="submit" className="btn btn-primary">Update</button>
 </form>



</div>
        );



   }


}
