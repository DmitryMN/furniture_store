import React from "react";
import { ItemType } from "../products/products";

type ItemFurniturePropsType = {
    item: ItemType
    addToOrder: (order: string) => void
}

function ItemFurniture(props: ItemFurniturePropsType) {
    const {title, description, price, img} = props.item;

    return(
        <div className="item">
            <img src={"./images/" + img}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <b>{price} &euro;</b>
            <div className="add_to_card" onClick={() => { props.addToOrder(title)}}>+</div>            
        </div>
    );
}

export default ItemFurniture