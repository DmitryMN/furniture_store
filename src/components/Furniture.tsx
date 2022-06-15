import React from "react";
import { ItemType, OrderType} from "../products/products";
import ItemFurniture from "./ItemFurniture";

type FurniturePropsType = {
    items: Array<ItemType>
    addToOrder: (order: OrderType) => void
    onShowItem: (item: ItemType) => void
}

function Furniture(props: FurniturePropsType) {
    return(
        <main>
            {props.items.map(elem => <ItemFurniture key={elem.id} item={elem} addToOrder={props.addToOrder} onShowItem={props.onShowItem}/>)}
        </main>
    );
}

export default Furniture;