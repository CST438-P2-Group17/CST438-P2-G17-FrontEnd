import React from 'react';
import GiftCard from './giftcards';

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
        image: 'https://via.placeholder.com/150',
        name: 'Netflix Gift Card',
        description: 'Binge-watch your favorite shows on Netflix with this card.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Spotify Gift Card',
        description: 'Listen to unlimited music with a Spotify Premium card.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'PlayStation Gift Card',
        description: 'Get games, movies, and more from the PlayStation Store.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Xbox Gift Card',
        description: 'Unlock the latest games and add-ons on Xbox Live.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Uber Gift Card',
        description: 'Use this card to get rides or order food on Uber and Uber Eats.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Airbnb Gift Card',
        description: 'Travel or stay in unique homes with this Airbnb gift card.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Nike Gift Card',
        description: 'Shop for the latest shoes and apparel at Nike stores.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Apple Gift Card',
        description: 'Get the latest Apple products, apps, and services with this card.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Best Buy Gift Card',
        description: 'Find electronics, appliances, and more with this Best Buy card.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Sephora Gift Card',
        description: 'Shop beauty products, skincare, and fragrances with Sephora.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Target Gift Card',
        description: 'Shop for essentials, clothes, and groceries at Target with this card.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Disney Gift Card',
        description: 'Enjoy Disney theme parks, movies, and merchandise with this card.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Home Depot Gift Card',
        description: 'Perfect for home improvement projects and tools at Home Depot.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Walmart Gift Card',
        description: 'Shop for groceries, electronics, and more at Walmart.',
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'Fandango Gift Card',
        description: 'Get movie tickets and stream new releases with a Fandango card.',
    },
    {
        image: 'https://via.placeholder.com/150',
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
