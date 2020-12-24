import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             email : '',
             password : '',
             city : ''
        }
    }
    handelName = (event) =>{
         this.setState({
            name : event.target.value 
         })
    } 
    handelEmail = (event) =>{
        this.setState({
            email : event.target.value
        })
    }
    handelPass = (event) =>{
        this.setState({
            password : event.target.value
        })
    }
    handelCity = (event) =>{
        this.setState({
            city : event.target.value
        })
    }
    handelSubmit = (event) =>{
        event.preventDefault();
        alert('Welcome ' + this.state.name)
        document.getElementById('p1').innerHTML=this.state.name +  this.state.email +  this.state.password +this.state.city
    }
    
    render() {
        return (
            <div>
                <h1>input form</h1>
                <form  onSubmit = {this.handelSubmit} >
                  <div>
                     <label>Name : </label>
                    <input type= 'text' value = { this.state.name} onChange = {this.handelName}></input>
                 </div>
                 <div>
                     <label>email : </label>
                     <input type = 'text' value = {this.state.email} onChange = {this.handelEmail}></input>
                 </div>
                 <div>
                     <label>Password : </label>
                     <input type= 'password' value ={this.state.password} onChange= {this.handelPass}></input>
                 </div>
                <div>
                     <label>City : </label>
                     <input type= 'text' value = { this.state.cityn} onChange = {this.handelCity}></input>
                 </div>
                 <button type='submit'>Submit</button>
             </form>
             <p id='p1'></p>
            </div>
        )
    }
}

export default Input
