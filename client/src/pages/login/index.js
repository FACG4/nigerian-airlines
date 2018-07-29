import React, { Component } from 'react';
import './login.css';
import Input from '../../components/input';
import Button from '../../components/button';
import { Link ,Route  } from 'react-router-dom'
import { Redirect } from 'react-router'


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
    //  this.props.history.push('/addflight')
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
          <Button textvalue="Login" />
          </form>
          {/* <Redirect to={'/addflight'}/> */}

        </div>
    );
  }
}

export default Login;