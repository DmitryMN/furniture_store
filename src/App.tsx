import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FurnitureItemsType, furnitureItems, OrderType } from './products/products';
import Furniture from './components/Furniture';
import Categories from './components/Categories';
import ShowFurniture from './components/ShowFurniture';

function App() {

  const [stateFurniture, setFurnitureState] = useState<FurnitureItemsType>(furnitureItems);
  const [showFullItem, setShowFullItem] = useState<boolean>(false);

  const addToOrder = (order: OrderType) => {
    let isInArray = false
    stateFurniture.cart.forEach(el => {
      if (el.id === order.id) {
        isInArray = true
      }
    });

    if(!isInArray) setFurnitureState({...stateFurniture, cart: [...stateFurniture.cart, order]});

  }

  const chooseCategory = (category: string) => {
    if(category === "all") {
      setFurnitureState({...furnitureItems});
      return;
    }
    setFurnitureState({...furnitureItems, items: furnitureItems.items.filter((el) => el.category === category)});
  }

  const deleteOrder = (id: number) => {
    setFurnitureState({...stateFurniture, cart: stateFurniture.cart.filter((el) => el.id !== id)});
  }

  const onShowItem = () => {

  }

  return (
    <div className="wrapper">
      <Header cart={stateFurniture.cart} deleteOrder={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Furniture items={stateFurniture.items} addToOrder={addToOrder} />
      {showFullItem && <ShowFurniture />}
      <Footer />
    </div>
  );
}

export default App;
