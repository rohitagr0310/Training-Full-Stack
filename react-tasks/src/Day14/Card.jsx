// Card.jsx
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={title} style={styles.image} />
            <div style={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        maxWidth: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        borderRadius: '8px 8px 0 0',
    },
    content: {
        padding: '8px 0',
    },
};

export default Card;
