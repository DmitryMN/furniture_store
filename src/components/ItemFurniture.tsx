import React from "react";
import { ItemType, OrderType } from "../products/products";

type ItemFurniturePropsType = {
    item: ItemType
    addToOrder: (order: OrderType) => void
}

function ItemFurniture(props: ItemFurniturePropsType) {
    const {id, title, description, img, price} = props.item;

    return(
        <div className="item">
            <img src={"./images/" + img}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <b>{price} &euro;</b>
            <div className="add_to_card" onClick={() => { props.addToOrder({id, title, img, price})}}>+</div>            
        </div>
    );
}

export default ItemFurniture