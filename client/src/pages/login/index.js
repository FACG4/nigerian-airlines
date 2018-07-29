import React, { Component } from 'react';
import './login.css';
import Input from '../../components/input';
import Button from '../../components/button';
import { Link ,Route  } from 'react-router-dom'
import Router from '../../components/Router';


class Login extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="header"> Admin Panel</h1>
          <form>
            <div className="inputs-group">
               <Input iconclass='fa fa-user' placeholder='username' />
               <Input iconclass='fas fa-unlock' placeholder='password' />
           </div>
           <Link to="/updateflight">
              <Button textvalue="Login">
              </Button>
          </Link>
          </form>
        </div>
    );
  }
}

export default Login;
