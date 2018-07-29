import React, { Component } from 'react';
import { Link ,Route, Redirect, withRouter } from 'react-router-dom'

import { Input, Button } from '../../components'
import './login.css';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      textInputValue: '',
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
   
  }

  handleLogin (e) {
    e.preventDefault()
    const { history } = this.props;
    console.log('props',history);
     this.props.history.push('/addflight')
  }

  handleTextInputChange(value) {
    console.log(value);
    this.setState({ textInputValue: value });
  }
  render() {
    return (
        <div className="container">
          <h1 className="header"> Admin Panel</h1>
          <form onSubmit={this.handleLogin}>
            <div className="inputs-group">
               <Input iconclass='fa fa-user' placeholder='username'  onTextInputChange={this.handleTextInputChange}/>
               <Input iconclass='fas fa-unlock' placeholder='password' onTextInputChange={this.handleTextInputChange} />
           </div>
          <Button onClick={this.handleLogin} className="btn-style">Login</Button>
          </form>
          {/* <Redirect to={'/addflight'}/> */}

        </div>
    );
  }
}

export default withRouter(Login);