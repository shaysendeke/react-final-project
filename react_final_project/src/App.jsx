import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
import Discover from "./pages/Discover";


function App() {
  const [view, setView] = useState(true)
  return (
    <BrowserRouter>
      <div className="App">
        {/* {view?<HomePage/>:""} */}
            {/* Library Project
        <br />
        <br />
        <div>
          <h1>WELCOME TO THE OFFICIAL BIBLIOTECH </h1>
          what would you like to do?<br></br>
          <br></br>
        </div> */}
      <Link to="/LogIn"onClick={()=>{
        setView(false)
      }}>LOG IN</Link><span>  | </span> 
      <Link to="/Register" onClick={()=>{
        setView(false)
      }} 
      >REGISTER</Link>
      {/* <Link to="/Discover"></Link> */}
      <Switch>
          {/* <Route exact path ="/" render={()=> <HomePage/>}/> */}
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Discover" component={Discover}/>
          
          {/* !!check why does it appear when the home page is loading */}
          {/* <Route component={NotFound}></Route> */}
        </Switch> 
      </div>
      {/* <Discover></Discover> */}
    </BrowserRouter>
  );
}

export default App;
