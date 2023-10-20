import logo from './logo.svg';
import './App.css';
import Editor from './Components/Editor';
import Home from './Admin/Home';
import UserForm from './Components/UserForm';
import AllRoutes from './Routes/AllRoutes';
import Dashboard from './Admin/Dashboard';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';


function App() {
  let location = useLocation()
  return (
    <div className="App">
        {/* <Dashboard /> */}
        {/* {
          location.pathname == "/" ? <Navbar /> : null
        } */}
        {/* <Navbar /> */}
      <AllRoutes />
      {/* <Editor /> */}
      {/* <Home /> */}
      {/* <UserForm /> */}
    
    </div>
  );
}

export default App;
