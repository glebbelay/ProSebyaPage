import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import StartPage from "./pages/StartPage";
import Registration from "./pages/Registration";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";


const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("authenticated");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      navigate("/");
    }
  }, [isAuthenticated, navigate]);


  return element;
};

function App() {
  
    return (
      <div className="name">
      
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} /> 
          <Route path="/reg" element={<Registration/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/account" element={<AccountPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/blog" element={<BlogPage/>} />

        </Routes>

        
      </Router>
      </div>
    );
}

export default App;