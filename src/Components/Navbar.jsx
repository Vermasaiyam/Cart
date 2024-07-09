import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Styles/navbar.css'

const Navbar = ({size, setShow}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className='my_shop'  onClick={()=>setShow(true)}>Shopping Cart</span>
        <div className="cart" onClick={()=>setShow(false)}>
            <span>
                <i className="fa-solid fa-cart-plus"></i>
            </span>
            <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
