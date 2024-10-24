import { Link } from 'react-router-dom';
import { gapi } from 'gapi-script';
import { loadClientAuth2 } from 'gapi-script';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';


export default function Navbar(){
    // useEffect(() => {
    //     const initGapiClient = async () => {
    //         try {
    //             await window.gapi.auth2.init({
    //                 client_id: clientId,
    //                 scope: 'profile email',
    //             });
    //             console.log("GAPI client initialized");
    //         } catch (error) {
    //             console.error("Failed to load GAPI client:", error);
    //         }
    //     };

    //     if (clientId) {
    //         window.gapi.load('auth2', initGapiClient);
    //     }
    // }, [clientId]);
    const navigate = useNavigate();
    const handleLogout = () => {
        googleLogout();
        localStorage.setItem('userData', null);
        navigate('/');
      };

    return <nav className="nav">
        <a href="/home" className="wishListName">WishList</a>
        <ul>
            <li><a href="/viewWishListItems">View Wishlists</a></li>
            <li><a href="/createalist">Create a Wish List</a></li>
            <li><a href="/giftcards">Gift Cards</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/userProfile">User Profile</a></li>
            <li><a href="/admin">Admin</a></li>
            
        </ul>
        <div className='auth-btns'>
            <button className='loginBtn' onClick={handleLogout}>
                Logout
            </button>
        </div>
    </nav>
    // return <></>
}