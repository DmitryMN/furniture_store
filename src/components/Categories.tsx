import React, { useState } from 'react';

type CategoriesType = {
    key: string
    name: string
}

type CategoriesPropsType = {
    chooseCategory: (category: string) => void
}

const categories = [
    {
        key: "all",
        name: "all"
    },
    {
        key: "table",
        name: "tables"
    },
    {
        key: "sofa",
        name: "sofas"
    },
    {
        key: "chair",
        name: "chairs"
    },
    {
        key: "stand",
        name: "stands"
    },

];

export default function Categories(props: CategoriesPropsType) {

    const [getCategories, setCategories] = useState<Array<CategoriesType>>(categories);

    return (
        <div className="categories">
            {getCategories.map(el => (<div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>))}
        </div>
    )
}
