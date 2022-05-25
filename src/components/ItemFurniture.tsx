import React from "react";
import { ItemType } from "../products/products";

type ItemFurniturePropsType = {
    item: ItemType
}

function ItemFurniture(props: ItemFurniturePropsType) {
    const {title, description, price}: ItemType = props.item
    return(
        <div className="item">
            <h2>{title}</h2>
            <p>{description}</p>
            <b>{price}</b>            
        </div>
    );
}

export default ItemFurniture