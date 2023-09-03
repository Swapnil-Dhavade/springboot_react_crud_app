import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";
import AddEmployee from "./components/AddEmployee";
function App(){
  return (
    <BrowserRouter>
      <div>
        <switch>
          <Routes>
          <Route exact path="/" Component={EmployeesList}></Route>
          <Route path="/add" Component={AddEmployee}></Route>
          <Route path="/employees/edit/:id" Component={AddEmployee}></Route>
          <Route path="*" Component={NotFound}/>  
          </Routes>
        </switch>
      </div>
    </BrowserRouter>
  )
  
}

export default App;