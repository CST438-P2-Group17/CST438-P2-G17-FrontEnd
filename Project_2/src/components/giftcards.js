import React from 'react';

const GiftCard = ({ image, name, description, onAddToList }) => {
    return (
        <div className="gift-card">
            <img src={image} alt={name} className="gift-card-image" />
            <h3 className="gift-card-name">{name}</h3>
            <p className="gift-card-description">{description}</p>
            <button className="add-to-list-btn" onClick={onAddToList}>
                Add to Wishlist
            </button>
        </div>
    );
}

export default GiftCard;
