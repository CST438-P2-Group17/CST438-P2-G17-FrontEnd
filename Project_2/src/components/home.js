import { googleLogout } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React from "react";

function Home( {userData} ) {
    const navigate = useNavigate();
    
    const logout = () => {
        googleLogout();  // Logs the user out from Google OAuth
        console.log('User logged out');
        navigate('/')
    }
    return (
        <div className="home-container">
            <div className="banner">
                <h2>The Better Wish List</h2>
                <p>Add gifts from any website</p>
                <Link to="/login" className='get-started-btn'>Get Started</Link>
                
            </div>
         {/*  <div className="logout-section">
                <button className="logout-btn" onClick={logout}>Logout</button> 
          </div> */}
        </div>
    );
}

export default Home;