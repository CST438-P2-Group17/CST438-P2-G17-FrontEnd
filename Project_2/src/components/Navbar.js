import { Link } from 'react-router-dom';



export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="wishListName">WishList</a>
        <ul>
            <li><a href="/createalist">Create a Wish List</a></li>
            <li><a href="/giftcards">Gift Cards</a></li>
            <li><a href="/about">About</a></li>
            
        </ul>
        <div className='auth-btns'>
            <Link to="/login" className='loginBtn'>Login</Link>
            <Link to="/signup" className='signupBtn'>Sign Up</Link>

        </div>
    </nav>
}