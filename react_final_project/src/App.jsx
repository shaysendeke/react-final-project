import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
import Discover from "./pages/Discover";
import ReadingList from "./pages/ReadingList";
import CompletedLit from "./pages/CompletedList";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
  // const [view, setView] = useState(true);
  const [readingList, setReadingList] = useState([])
  const [AllBooks, setAllBooks] = useState("")
  const [completedList, setCompletedList] = useState([])
  function insertToComplete(index){
    // if(completedList.filter(item=>item.id===readingList[index].id))return false
    const temp=[...completedList]
    const temp2=[...readingList]
    temp.push(readingList[index])
    temp2.splice(index,1) 
    setCompletedList(temp)
    setReadingList(temp2)
  }
  function removeFromReadingList(index){
    const temp=[...readingList]
    setReadingList(temp)
    temp.splice(index,1)
  }
  function removeFromCompletedlist(index){
    const temp=[...completedList]
    temp.splice(index,1)
    setCompletedList(temp)
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })        // console.log("deleted");
  }
  const getReadingList = ()=>readingList;
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home Page</Link>
        <span> | </span>
        <Link to="/LogIn">LOG IN</Link>
        <span> | </span>
        <Link to="/Register">REGISTER</Link>
        <span> | </span>
        <Link to="/Discover">DISCOVER</Link>
        <span> | </span>
        <Link to="/ReadingList">Reading List</Link>
        <span> | </span>
        <Link to="/CompletedList">Completed List</Link>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Discover"  render={() => <Discover  setReadingList={setReadingList} setAllBooks={setAllBooks} getReadingList={getReadingList}/>}></Route>
          <Route exact path="/ReadingList" render={() => <ReadingList  readingList={readingList} AllBooks={AllBooks} insertToComplete={insertToComplete} removeFromReadingList={removeFromReadingList}/>}></Route>
          <Route exact path="/CompletedList" render={()=> <CompletedLit completedList={completedList} removeFromCompletedlist={removeFromCompletedlist} />}></Route>

          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
