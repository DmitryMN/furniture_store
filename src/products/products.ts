
export type ItemType = {
    id: number
    title: string
    category: string
    price: number
}

export type FurnitureItemsType = Array<ItemType>;


export const items: FurnitureItemsType = [{
    id: 1,
    title: "white table",
    category: "table",
    price: 1500,
},
{
    id: 2,
    title: "red sofa",
    category: "sofa",
    price: 2000,
},
{
    id: 3,
    title: "black table",
    category: "table",
    price: 500,
},
{
    id: 4,
    title: "white chair",
    category: "chair",
    price: 300,
},
{
    id: 5,
    title: "white stand",
    category: "stand",
    price: 1200,
},
{
    id: 6,
    title: "green sofa",
    category: "sofa",
    price: 3000,
},
{
    id: 7,
    title: "black stand",
    category: "stand",
    price: 1100,
},
{
    id: 8,
    title: "blue chair",
    category: "chair",
    price: 600,
},];