import React from "react";
import "./login.css";
import Image from "../pics/2.png";
import {useState } from "react";
import Dashboard from "./dashboard";
import {useNavigate} from 'react-router-dom'
function Login() {
 const [user, setUser] = useState("");
 const [pass, setPass] = useState(''); 
 let navigate = useNavigate();
  return (
    <>
      <div className="b1">
        <div className="b2">
          <img src={Image} className="pics"></img>
          <form>
            <div className="username">
              <h4>
                Member Login
              </h4>
              <input onChange={handleChangeUser} className="i1" type="text" name="username" placeholder="Username" />
              <input onChange={handleChangePassword} type="text" className="i1" name="password" placeholder="Password" />
            </div>
             <input type="submit" onClick={handleSubmit} className="sub" value="Sing in" />
          </form>
        </div>
      </div>
    </>
  );

  function handleChangeUser(e) {
    setUser(e.target.value)
  }

  function handleChangePassword(e){
    setPass(e.target.value)
  }

  function handleSubmit() {
    if (user === "1111" & pass === "1111"){
      navigate("/dashboard");
    } else{
      window.alert("ورود ناموفق")
    }
  }
}



export default Login;
