// import logo from './logo.svg';

import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import UserProfile from "./components/userProfile";
import About from "./components/about";
import GiftCardList from "./components/giftcardlist";
import { useState, useEffect } from 'react';


/*import './App.css';
import Login from "./components/login.js"
import Home from "./components/home.js"
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
      <Navbar clientId="591552019563-hc7e24ispsfj464umknr2u428obj0fsh.apps.googleusercontent.com"/>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/createalist" element={<div>Create a List Page</div>} />
          <Route path="/giftcards" element={<GiftCardList />} />
          <Route path="/about" element={<About />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
    </div>
  );
}
export default App