import { useState } from 'react';

function ProductCard(props) {
    const [quantity, setQuantity] = useState(0);

    function handleAddToCart() {
        setQuantity(quantity + 1);
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px', width: '250px' }}>
            <img src={props.image} alt={props.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{props.name}</h3>
            <p>Цена: ${props.price}</p>

            <button onClick={handleAddToCart}>Добавить в корзину</button>
            <p>В корзине: {quantity} шт.</p>
        </div>
    );
}

export default ProductCard;