
import './App.css';
import {Navbar} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Prueba2 from './charts/Prueba2';

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
     <div className="App">
      <Navbar bg = "danger">
         <div className = "container">
           <Navbar.Brand className="text-white">Nodos</Navbar.Brand>
         </div>
      </Navbar>
      <HomeScreen/>
      
      {/* <getdata/> */}
     </div>
    // <Router>
    //       <Navbar bg = "danger">
    //      <div className = "container">
    //        <Navbar.Brand className="text-white">Proyecto Redes</Navbar.Brand>
    //     </div>
    //   </Navbar>
    //   <Routes>
    //   {/* <Route path = '/data' exact element = {<Data/>}/> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
