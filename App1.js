
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Contact1 from "./pages/Contact1";
import NoPage from "./pages/NoPage";
import "./App.css"

 function App() {
  return (
    <div className="app">

        <Contact1 />
   
    </div>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App/>);
export default App;