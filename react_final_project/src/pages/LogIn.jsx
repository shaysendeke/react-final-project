import {React, useState} from 'react'
import { apiKey } from "../logic/api";
import axios from "axios";
import { Redirect } from "react-router-dom";




export default function LogIn({setAuth, auth}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorFromServer, setErrorFromServer] = useState(false);
  
    const login = () => {

      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
      axios
        .post(url, {
          email,
          password,
        })
        .then(function (response) {
          console.log(response.data)
          setAuth(response.data);
        })
        .catch(function (error) {
          setErrorFromServer(error);
          console.log(error.response);
        });
      }
         if(auth){
              return <Redirect to="/Discover"></Redirect>
          }
          
  
    return (
        <div>
            <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(email);
          login();
        }}
      >
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <br></br>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br></br>
        <br />
        <br></br>
        <button className='icon-elements'>Log In</button>
        <p style={{ color: "red" }}>
          {errorFromServer ? "Please Check email or password " : ""}
        </p>
      </form>
        </div>
    )
}
