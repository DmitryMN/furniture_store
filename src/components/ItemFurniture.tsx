import React from "react";
import { ItemType, OrderType } from "../products/products";

export type ItemFurniturePropsType = {
    item: ItemType
    addToOrder: (order: OrderType) => void
    onShowItem: (item: ItemType) => void
}

function ItemFurniture(props: ItemFurniturePropsType) { 
    const {id, title, description, category, img, price} = props.item;

    return(
        <div className="item">
            <img onClick={() => {props.onShowItem({id, title, description, category, img, price})}} src={"./images/" + img}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <b>{price} &euro;</b>
            <div className="add_to_card" onClick={() => { props.addToOrder({id, title, img, price})}}>+</div>            
        </div>
    );
}

export default ItemFurniture