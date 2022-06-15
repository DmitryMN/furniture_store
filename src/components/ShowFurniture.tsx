import React from "react";
import { ItemType, OrderType } from "../products/products";
import ItemFurniture from "./ItemFurniture";

type ShowFurniturePropsType = {
    item: ItemType
    addToOrder: (order: OrderType) => void
    onShowItem: (item: ItemType) => void
}

export default function ShowFurniture(props: ShowFurniturePropsType) {
    
    return (
        <div className="full_item">
            <div className="full_item__wrapp">
                <ItemFurniture item={props.item} addToOrder={props.addToOrder} onShowItem={props.onShowItem} />
            </div>
        </div>
    )
}
