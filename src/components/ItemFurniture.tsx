import React from "react";
import { ItemType } from "../products/products";

type ItemFurniturePropsType = {
    item: ItemType
}

function ItemFurniture(props: ItemFurniturePropsType) {
    const {title, description, price, img}: ItemType = props.item
    return(
        <div className="item">
            <img src={"./images/" + img}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <b>{price} &euro;</b>
            <div className="add_to_card">+</div>            
        </div>
    );
}

export default ItemFurniture