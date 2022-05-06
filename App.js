
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./App.css"

 function App() {
  return (
    <div className="app">

        <BrowserRouter >
        <div className="nav">
          <ul>
               <li> 
                  <NavLink  
                      to="Home"
                        style={({ isActive }) =>
                          isActive
                            ? {
                                color: '#fff',
                                background: '#7600dc',
                              }
                            : { color: '#545e6f', background: '#f0f0f0' }
                        }>
                        Home
                  </NavLink>
                </li> 
                <li>
                  <NavLink
                        to="contact"
                        style={({ isActive }) =>
                          isActive
                            ? {
                                color: '#fff',
                                background: '#7600dc',
                              }
                            : { color: '#545e6f', background: '#f0f0f0' }
                        }
                      >
                        Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                        to="blogs"
                        style={({ isActive }) =>
                          isActive
                            ? {
                                color: '#fff',
                                background: '#7600dc',
                              }
                            : { color: '#545e6f', background: '#f0f0f0' }
                        }
                      >
                        Blogs
                  </NavLink>
                  </li>
            </ul>
          </div>
          <Routes >
              <Route path="home" index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
export default App;