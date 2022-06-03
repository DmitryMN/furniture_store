import React, {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";

type HeaderPropsTYpe = {
  cart: any
}

export default function Header(props: HeaderPropsTYpe) {
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
            { cartOpen && <div className="shop_cart">{props.cart}</div>}
        </div>
        <div className="presentation"></div>
    </header>
  )
}
