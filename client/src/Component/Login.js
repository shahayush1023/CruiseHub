import React, { useReducer, useState } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {useNavigate} from 'react-router-dom'
import { login } from "../api/user"  
const config = {
  method: "POST",
  "Content-Type": "application/json",
};
const Login = () => {
  const [user,setUser]=useState({
    uname1:"", pass1:""
   });
   let name,value;  
   const handleInput=(e) =>{
      //  console.log(e);
       name=e.target.name;
       value=e.target.value;
       setUser({...user,[name]:value});
     } 
     const navigate=useNavigate();
     const PostData = async (e) => {
      e.preventDefault();
      const { uname1, pass1 } = user;
  
      const data = await login(user, config);
  
      console.log(data);
      if (data.message === "user has logged in") {
        window.alert("login succ");
        
        navigate("/");
      } else {
        
        window.alert("invalid");
      }
    };

  
  return (
    <div className="l1" >
      <form className="l2">
        <div className="l3">
           <div style={{display:'flex'}}>
           <img src={require('./login logo.png')}  style={{height:'30px'}}></img>
           <h3 className="l4">LogIn</h3>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              name="uname1"
               value={user.uname1}
               onChange={handleInput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
              name="pass1"
               value={user.pass1}
               onChange={handleInput}
            />
          </div>
          <div className="form-group mt-3">
          <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
           </div>         
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={PostData} >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          
          <p className="signup text-center mt-2">
             Don't Have an Account?
             <LinkContainer to='/signup'><a href="#">Signup</a></LinkContainer>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
