import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="developers-section">
                <h2>Developers</h2>
                <div className="developers-list">
                    <div className="developer">
                        <img src="judah.png" alt="Developer" className="developer-avatar" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>
                    <div className="developer">
                        <img src="alex.png" alt="Developer" className="developer-avatar" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>
                    <div className="developer">
                        <img src="kevin.gif" alt="Developer" className="developer-avatar" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>
                    <div className="developer">
                        <img src="sergio.jpg" alt="Developer" className="developer-avatar" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <h2>About WishList</h2>
                <p>Welcome to Wishlist, the ultimate platform to create and manage your personal wishlist! Whether you're planning for a special event, keeping track of your favorite items, or saving for a big purchase, Wishlist makes it easy to add products from any store in one convenient place. Organize your lists, share them with friends and family, and get notified when items go on sale. Start building your perfect wishlist today with Wishlist!</p>
            </div>
        </div>
    );
}

export default About;