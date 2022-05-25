import React from "react";
import { ItemType } from "../products/products";

type ItemFurniturePropsType = {
    item: ItemType
}

function ItemFurniture(props: ItemFurniturePropsType) {
    const {title}: ItemType = props.item
    return(
        <div>{title}</div>
    );
}

export default ItemFurniture