import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(){
    super()
    this.state ={
      todos : [{title: "Bisma" , edit: false }, {title:"Saif" ,edit: false},{title: "Abdullah" ,edit: false}],
      value: ''
    }
  }
  add_todo = () => {
    // this.state.todos.push(this.state.value)
    // this.setState({
    //   todos: this.state.todos
    // })
    let obj ={title: this.state.value}
    this.setState({
      todos:[...this.state.todos,obj],
      value:''
    })
  }
  delete_todo = (index)=>{
    this.state.todos.splice(index,1)
    this.setState({
      todos:this.state.todos
    })
  }
  edit_todo =(index, val)=>{
  //  var updated_value = prompt("Enter Value");
  //  this.state.todos[index] = updated_value
  this.state.todos[index].edit = true
   this.setState({
    todos:this.state.todos
  })
  }

  handleChange = (e , index)=> {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos:this.state.todos
    })
  }
  update = (index) => {
    this.state.todos[index].edit = false;
   this.setState({
    todos:this.state.todos
  })
  }
  render() {
    let { todos, value } =this.state;
    return (
      <>
      <div id='container'>
        <div id='main'>
          <div className='list-head'>
        <input value={value} onChange={(e)=>this.setState({value: e.target.value})} type="text" placeholder='Enter Value'/>
        <button  className='add-btn' onClick={this.add_todo}>Add Item</button>
       </div>
       <ul>
       {todos.map((v,i)=>{
          return<li key={i}>
            {v.edit ? <input id='edit-input' type="text" value={v.title} onChange={(e)=>this.handleChange(e, i)} /> : v.title}
            {v.edit ? 
            <button id='update' onClick={()=> this.update(i)}>Update</button>
            :
            <button id='edit' onClick={() =>this.edit_todo(i , v.title)}>Edit</button>
            }
          
          <button id='delete' onClick={() =>this.delete_todo(i)}>Delete</button>
          </li>
        })}
       </ul>
       </div>
      </div>
      </>
    )
  }
}






