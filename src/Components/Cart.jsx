import React, { useEffect, useState } from 'react'
import '../Styles/cart.css'

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id)=>{
        setCart(cart.filter((item)=> id !== item.id));
    }

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans+= item.price* item.amount
        ))
        setPrice(ans);
    }

    useEffect(()=>{
        handlePrice();
    })
    return (
        <article>
            {
                cart.length===0? <div className='empty'>Cart is empty...</div> :
                cart?.map((item) => (
                    <div className='cart_box' key={item.id}>
                        <div className='cart_img'>
                            <img src={item.img} />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button className='i' onClick={() => {
                                handleChange(item, +1)
                            }}>+</button>
                            <span>{item.amount}</span>
                            <button className='i' onClick={() => {
                                handleChange(item, -1)
                            }}>-</button>
                        </div>
                        <div>
                            <span>{item.price} Rs</span>
                            <button className='button' onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span> Rs - {price}</span>
            </div>
        </article>
    )
}

export default Cart
