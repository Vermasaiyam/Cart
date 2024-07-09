import React from 'react'
import '../Styles/card.css'

const Card = ({ item, handleClick }) => {
    return (
        <div className='cards'>
            <div className="image_box">
                <img src={item.img} alt="Product Image" />
            </div>
            <div className="details">
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>Price - {item.price} Rs</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
