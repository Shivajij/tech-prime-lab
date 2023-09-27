import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import AddProject from './components/pages/AddProject/AddProject';
import Dashboard from './components/pages/dashboard/Dashboard';
import Sidebar from './components/pages/Sidebar/Sidebar';
import AllRoutes from './components/AllRoutes/Routes';
import ChartGraph from './components/pages/dashboard/CartGraph';

function App() {
  return (
    <div className="App">
   {/* <Login/> */}
   {/* <AddProject/> */}
  {/* <Dashboard/> */}
   {/* <Sidebar/> */}
   {/* <Routes/> */}
   <AllRoutes/>
   {/* <ChartGraph/> */}
    </div>
  );
}

export default App;
