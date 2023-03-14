import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./Component/Navbar1";
import Signuppage from "./Component/Signuppage";
import Login from "./Component/Login";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import About from "./About";
import CheckBox from "./Component/CheckBox";
import Review from "./Component/Review";

import Contact from "./Component/Contact";
import Home1 from "./Component/Home1/Home1";
function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/seat" element={<CheckBox />} />
        <Route exact path="/Home1" element={<Home1 />} />
        <Route exact path="/feedback" element={<Review />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
