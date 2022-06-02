import React from "react";
import { FurnitureItemsType, ItemType } from "../products/products";
import ItemFurniture from "./ItemFurniture";

type FurniturePropsType = {
    items: FurnitureItemsType
    addToOrder: (order: string) => void
}

function Furniture(props: FurniturePropsType) {
    return(
        <main>
            {props.items.map(elem => <ItemFurniture key={elem.id} item={elem} addToOrder={props.addToOrder}/>)}
        </main>
    );
}

export default Furniture;