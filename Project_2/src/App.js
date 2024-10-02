// import logo from './logo.svg';

import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";

/*import './App.css';
import Login from "./components/login.js"
import Home from "./components/home.js"
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
*/
function App(){
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/createalist" element={<div>Create a List Page</div>} />
          <Route path="/giftcards" element={<div>Gift Cards Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />

        </Routes>
    </div>
  );
}
export default App