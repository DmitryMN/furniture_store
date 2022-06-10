import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { OrderType } from "../products/products";
import Order from "./Order";

type HeaderPropsType = {
  cart: Array<OrderType>
  deleteOrder: (id: number) => void
}

const showOrders = (props: Array<OrderType>, deleteOrder: (id: number) => void) => {
  let summ = 0;
  props.forEach(el => {summ += el.price})
  return (
    <>
      {props.map(el => (<Order key={el.id} order_el={el} deleteOrder={deleteOrder} />))}
      <div className="show__summ">you price: {summ} &euro;</div>
    </>
  );
}

const showNothing = () => {
  return (
    <div>Cart is empty</div>
  );
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
        {cartOpen && <div className="shop_cart">{props.cart.length > 0 ? showOrders(props.cart, props.deleteOrder) : showNothing()}</div>}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
