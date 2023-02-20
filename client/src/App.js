import logo from './logo.svg';
import './App.css';
import Navbar1 from './Component/Navbar1';
import Signuppage from './Component/Signuppage';
import Login from './Component/Login';
import Home from './Component/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from './Component/Footer';
import About from './About';
import CheckBox from './Component/CheckBox';

import Contact from './Component/Contact';
import Home1 from './Component/Home1/Home1';
function App() {
  return (
    
    <Router>
      <Navbar1/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>} /> 
        <Route path="/signup" element=<Signuppage/> />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        
        <Route path="/seat" element={<CheckBox/>} />
        <Route path="/Home1" element={<Home1/> } />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;