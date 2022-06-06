import React, {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";
import {OrderType} from "../products/products";
import Order from "./Order";

type HeaderPropsType = {
  cart: Array<OrderType>
}

export default function Header(props: HeaderPropsType) {
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
            { cartOpen && <div className="shop_cart">{props.cart.map(el => (<Order key={el.id} id={el.id} title={el.title} img={el.img} price={el.price} />))}</div>}
        </div>
        <div className="presentation"></div>
    </header>
  )
}
