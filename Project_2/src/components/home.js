import { googleLogout } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    
    const logout = () => {
        googleLogout();  // Logs the user out from Google OAuth
        console.log('User logged out');
        navigate('/')
    }
    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the home page!</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;