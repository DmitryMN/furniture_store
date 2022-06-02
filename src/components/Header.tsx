import React, {useState} from "react";
import {FaShoppingCart} from "react-icons/fa"

export default function Header() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <header>
        <div>
            <span className="logo">House staff</span>
            <ul className="nav">
              <li>About</li>
              <li>contacts</li>
              <li>login</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop_cart_btn ${cartOpen && 'active'}`} />
            { cartOpen && <div className="shop_cart">111</div>}
        </div>
        <div className="presentation"></div>
    </header>
  )
}
