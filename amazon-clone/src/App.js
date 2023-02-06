import React from "react";
import "../src/App.css"
import  {Checkout} from"./Checkout"
import  {Login} from "./Login"
import  {Home} from "./Home";
import {BrowserRouter as Router ,  Route,  Routes } from "react-router-dom"
import Header from "./Header";
               

function App() {
  return (
<div className="app">

    <Router>
      <Routes> 
        <Route  path="/" element={<Header/> }/ > 
        <Route  path="/" element={<Home/>}/ > 
        <Route   path="/Checkout" element={<Checkout/>}/ > 
        <Route  path="/Login" element={<Login/>}/ >

      </Routes>
    </Router>

        
        </div>

  );
}

export default App;
