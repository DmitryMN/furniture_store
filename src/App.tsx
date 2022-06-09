import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FurnitureItemsType, furnitureItems, OrderType } from './products/products';
import Furniture from './components/Furniture';

function App() {

  const [stateFurniture, setFurnitureState] = useState<FurnitureItemsType>(furnitureItems);

  const addToOrder = (order: OrderType) => {
    let isInArray = false
    stateFurniture.cart.forEach(el => {
      if (el.id === order.id) {
        isInArray = true
      }
    });

    if(!isInArray) setFurnitureState({...stateFurniture, cart: [...stateFurniture.cart, order]});

  }

  const deleteOrder = (id: number) => {
    setFurnitureState({...stateFurniture, cart: stateFurniture.cart.filter((el) => el.id !== id)});
  }

  return (
    <div className="wrapper">
      <Header cart={stateFurniture.cart} deleteOrder={deleteOrder}/>
      <Furniture items={stateFurniture.items} addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;
