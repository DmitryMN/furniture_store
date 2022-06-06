import React from "react";
import { OrderType } from "../products/products";

export default function Order(props: OrderType) {
    return (
        <div className="order">
            <img src={"./images/" + props.img} />
            <div className="order__title">
                <span>{props.title}</span>
            </div>
            <div className="order__price">
                <span>{props.price}&euro;</span>
            </div>
        </div>
    )
}
