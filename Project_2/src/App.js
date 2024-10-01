// import logo from './logo.svg';
import './App.css';
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
