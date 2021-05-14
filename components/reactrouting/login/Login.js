import React, { Component } from 'react';  
class Login extends React.Component {  
  constructor(props) {  
      super(props);  
      this.updateLogin = this.updateLogin.bind(this);  
      this.input = React.createRef();  
  }  
  updateLogin(event) {  
      alert('You have entered the UserName and CompanyName successfully.');  
      event.preventDefault();  
  }  
  
  render() {  
    return (  
      <form onSubmit={this.updateLogin}>  
        <h1>employee details</h1>  
        <label>Name:  
            <input type="text" ref={this.input} />  
        </label>  
        <label>  
            CompanyName:  
            <input type="text" ref={this.input} />  
        </label>  
        <input type="submit" value="Login" />  
      </form>  
    );  
  }  
}  
export default Login;  