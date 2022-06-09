import React from "react";
import { OrderType } from "../products/products";
import { FaTrash } from "react-icons/fa";


type OrderPropsType = {
    order_el: OrderType
    deleteOrder: (id: number) => void
}

export default function Order(props: OrderPropsType) {
    return (
        <div className="order">
            <img src={"./images/" + props.order_el.img} />
            <div className="order__title">
                <span>{props.order_el.title}</span>
            </div>
            <div className="order__price">
                <span>{props.order_el.price} &euro;</span>
            </div>
            <FaTrash className="order_delete" onClick={() => props.deleteOrder(props.order_el.id)} />
        </div>
    );
}
