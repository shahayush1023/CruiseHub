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
import Payment from "./Component/Home1/Payment";
import Contact from "./Component/Contact";
import Home1 from "./Component/Home1/Home1";
import Order from "./Component/Home1/Order";
import { LoginDetailsProvider } from "./contex/logindetails";
import Thankyou from "./Component/Home1/Thankyou";
import Logout from "./Component/Logout";
function App() {
  return (
    <LoginDetailsProvider>
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
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/order" element={<Order />} />

          <Route exact path="/thank" element={<Thankyou />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </LoginDetailsProvider>
  );
}

export default App;
