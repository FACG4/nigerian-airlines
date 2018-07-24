import React, {
  Component
} from 'react';
import './login.css';
import '../App.css';
import '../input/Input.jsx'
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
      }

    }


  render() {
    return (
        <div className="container">
        <img  className="plane" src={require('./plane.png')} alt=""/>
        <h1 className="header"> Admin Panel</h1>
        <div className="inputs-group">


        <div className="user">
        <div className="usericon">
            <span className="fas fa-user-tie"></span>
        </div>
          <div className="userinput">
            <Input className="uname" placeholder='Username' />
          </div>

        </div>

        <Input className='password' placeholder='Password'  />
        </div>
        <Button  textvalue="Login"/>


    
</div>
  
    );
  }

}


export default Login;
