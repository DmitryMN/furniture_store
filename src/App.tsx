import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FurnitureItemsType, furnitureItems } from './products/products';
import Furniture from './components/Furniture';

function App() {

  const [stateFurniture, setFurnitureState] = useState<FurnitureItemsType>(furnitureItems);

  const addToOrder = (order: string) => {
    setFurnitureState({...stateFurniture, cart: [...stateFurniture.cart, order]});
  }

  return (
    <div className='wrapper'>
      <Header cart={stateFurniture.cart} />
      <Furniture items={stateFurniture.items} addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;
