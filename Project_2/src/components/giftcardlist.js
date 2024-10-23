
import GiftCard from './giftcards';
import React, {useState} from 'react';


const giftCardData = [

    {
        image: '/amazon.png',
        name: 'Amazon Gift Card',
        description: 'Use this card for your favorite products on Amazon.',
    },
    {
        image: '/googleplay.png',
        name: 'Google Play Gift Card',
        description: 'Enjoy apps, games, movies, and more with this card.',
    },
    {
        image: '/sbucks.jpg',
        name: 'Starbucks Gift Card',
        description: 'Enjoy your favorite coffee with this Starbucks card.',
    },
    {
        image: '/apple.png',
        name: 'iTunes Gift Card',
        description: 'Listen to music or watch movies with an iTunes card.',
    },
    {
        image: '/netflix.jpg',
        name: 'Netflix Gift Card',
        description: 'Binge-watch your favorite shows on Netflix with this card.',
    },
    {
        image: '/spotify.png',
        name: 'Spotify Gift Card',
        description: 'Listen to unlimited music with a Spotify Premium card.',
    },
    {
        image: '/playstation.png',
        name: 'PlayStation Gift Card',
        description: 'Get games, movies, and more from the PlayStation Store.',
    },
    {
        image: '/xbox.png',
        name: 'Xbox Gift Card',
        description: 'Unlock the latest games and add-ons on Xbox Live.',
    },
    {
        image: '/uber.jpg',
        name: 'Uber Gift Card',
        description: 'Use this card to get rides or order food on Uber and Uber Eats.',
    },
    {
        image: '/airbnb.jpg',
        name: 'Airbnb Gift Card',
        description: 'Travel or stay in unique homes with this Airbnb gift card.',
    },
    {
        image: '/nike.png',
        name: 'Nike Gift Card',
        description: 'Shop for the latest shoes and apparel at Nike stores.',
    },
    {
        image: '/apple.png',
        name: 'Apple Gift Card',
        description: 'Get the latest Apple products, apps, and services with this card.',
    },
    {
        image: '/bestbuy.jpg',
        name: 'Best Buy Gift Card',
        description: 'Find electronics, appliances, and more with this Best Buy card.',
    },
    {
        image: '/sephorag.png',
        name: 'Sephora Gift Card',
        description: 'Shop beauty products, skincare, and fragrances with Sephora.',
    },
    {
        image: '/targetg.jpg',
        name: 'Target Gift Card',
        description: 'Shop for essentials, clothes, and groceries at Target with this card.',
    },
    {
        image: '/disney.png',
        name: 'Disney Gift Card',
        description: 'Enjoy Disney theme parks, movies, and merchandise with this card.',
    },
    {
        image: '/homedepot.jpg',
        name: 'Home Depot Gift Card',
        description: 'Perfect for home improvement projects and tools at Home Depot.',
    },
    {
        image: '/walmart.png',
        name: 'Walmart Gift Card',
        description: 'Shop for groceries, electronics, and more at Walmart.',
    },
    {
        image: '/fandango.png',
        name: 'Fandango Gift Card',
        description: 'Get movie tickets and stream new releases with a Fandango card.',
    },
    {
        image: '/doordash.jpg',
        name: 'DoorDash Gift Card',
        description: 'Order food from your favorite local restaurants with DoorDash.',
    }
];


const GiftCardList = () => {
     const handleAddToList = (giftCardName) => {
        console.log(`${giftCardName} added to the list.`);
       
    };

    return (
        <div className="gift-card-list">
            {giftCardData.map((giftCard, index) => (
                <GiftCard
                    key={index}
                    image={giftCard.image}
                    name={giftCard.name}
                    description={giftCard.description}
                    onAddToList={() => handleAddToList(giftCard.name)}
                />
            ))}
        </div>
    );
}; 

export default GiftCardList;
