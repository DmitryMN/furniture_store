import React from "react";
import { FurnitureItemsType } from "../products/products";
import ItemFurniture from "./ItemFurniture";

type FurniturePropsType = {
    items: FurnitureItemsType
}

function Furniture(props: FurniturePropsType) {
    return(
        <main>
            {props.items.map(elem => <ItemFurniture key={elem.id} item={elem}/>)}
        </main>
    );
}

export default Furniture;