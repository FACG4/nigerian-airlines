import React, {
  Component
} from 'react';
import './login.css';
import '../../App.css';
import Input from '../../components/input/Input.jsx';
import Button from '../../components/button/Button.jsx';



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


        {/* <div className="user">
        <div className="usericon"> */}
            <label class="start_date">
            <Input className="uname" placeholder='Username' />
            </label>
          {/* </div>
        </div> */}

        <Input className='password' placeholder='Password'  />
        </div>
        <Button  textvalue="Login"/>

</div>
  
    );
  }

}


export default Login;
