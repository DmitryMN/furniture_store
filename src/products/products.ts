
export type ItemType = {
    id: number
    title: string
    description: string
    category: string
    img: string
    price: number
}

export type FurnitureItemsType = Array<ItemType>;


export const items: FurnitureItemsType = [{
    id: 1,
    title: "white table",
    description: "",
    category: "table",
    img: "white_table.jpg",
    price: 1500,
},
{
    id: 2,
    title: "red sofa",
    description: "",
    category: "sofa",
    img: "red_sofa.jpg",
    price: 2000,
},
{
    id: 3,
    title: "black table",
    description: "",
    category: "table",
    img: "black_table.jpg",
    price: 500,
},
{
    id: 4,
    title: "white chair",
    description: "",
    category: "chair",
    img: "white_chair.jpg",
    price: 300,
},
{
    id: 5,
    title: "white stand",
    description: "",
    category: "stand",
    img: "white_stand.jpg",
    price: 1200,
},
{
    id: 6,
    title: "green sofa",
    description: "",
    category: "sofa",
    img: "green_sofa.jpg",
    price: 3000,
},
{
    id: 7,
    title: "black stand",
    description: "",
    category: "stand",
    img: "black_stand.jpg",
    price: 1100,
},
{
    id: 8,
    title: "blue chair",
    description: "",
    category: "chair",
    img: "blue_chair.jpg",
    price: 600,
},];