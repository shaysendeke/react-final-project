import React, { useState } from "react";
import { apiKey } from "../logic/api";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


export default function Register({setAuth, auth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorFromServer, setErrorFromServer] = useState(false);

  const register = () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
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
//     // const route = ()=> {
//     //     <Redirect to='/LogIn'></Redirect>
//     //     console.log("good morning");
// };
if(auth){
  return <Redirect to="/Discover"></Redirect>
} 

  return (
    <div>
      <p>
        If you haven't signed in yet and would love to enjoy our infinite
        collection of books
      </p>
      <p>Sign up now. its easy, simple and free.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
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
        <input
          placeholder="confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <br />
        <br></br>
        <button>Register</button>
        <p style={{ color: "red" }}>
          {errorFromServer ?  console.log(errorFromServer) : ""}
        </p>
      </form>
      <hr />

      {/* add a onClick event to this button to redirect to Log In page */}
      <h3>Already have an account? Click here to log in.</h3>
      <Link to="/LogIn" className="btn btn-primary">Log In</Link>
    </div>
  );
}
