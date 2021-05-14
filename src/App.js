import Employee from "./components/Employee"
import Department from "./components/Department"
import Project from "./components/Project"
import Get from "./components/Get"
import Post from "./components/Post"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
    <div className="App">
      {/* <Get/> */}
      {/* <Post/> */}
      <h1>App Component</h1> 
      {/* <ul>
        <li><Link to="/employee">Employee</Link></li>
        <li><Link to="/department">Department</Link></li>
        <li><Link to="/project">Project</Link></li>
      </ul>
      <Route path="/employee" component={Employee}></Route>
      <Route path="/department" component={Department}></Route>
      <Route path="/project" component={Project}></Route> */}
      
      <ul>
        <li><Link to="/">Employee</Link></li>
         <li><Link to="/department">Department</Link></li>
         <li><Link to="/project">Project</Link></li>
     </ul>
       <Switch>
       <Route exact path="/" component={Employee}></Route>
       <Route path="/department" component={Department}></Route>
       <Route path="/project" component={Project}></Route>
       <Route path="/department" component={Employee}></Route>
       </Switch>
      
    </div>
  </Router>
  );
}

export default App;
