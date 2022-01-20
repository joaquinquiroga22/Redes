
import './App.css';
import {Navbar} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Prueba2 from './charts/Prueba2';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import Icon from '@material-ui/core/Icon';


 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaTwt from './Listas/ListaTwt';

function App() {
  return (
    //  <div className="App">
    //   <Navbar bg = "danger">
    //      <div className = "container">
    //        <Navbar.Brand className="text-white">Nodos</Navbar.Brand>
    //      </div>
    //   </Navbar>
    //   <HomeScreen/>
      
    //   {/* <getdata/> */}
    //  </div>
     <Router>
        <Navbar bg = "danger">
          <div className = "container">
            <Navbar.Brand className="text-white">Nodos</Navbar.Brand>
            <Button href="/lista" variant="contained" color= "primary" endIcon={<TwitterIcon/>} >Lista</Button>
         </div>
       </Navbar>
       <Routes>
        <Route path = '/' exact element = {<HomeScreen/>}/>
        <Route path = '/lista' exact element = {<ListaTwt/>}/>
       </Routes>
     </Router>
  );
}

export default App;
