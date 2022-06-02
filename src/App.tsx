import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FurnitureItemsType, items, ItemType } from './products/products';
import Furniture from './components/Furniture';

function App() {

  const [stateFurniture, setFurnitureState] = useState<FurnitureItemsType>(items);
  const [stateCart, setCartState] = useState<Array<string>>([]);

  const addToOrder = (order: string) => {
    setCartState([order, ...stateCart]);
    console.log(stateCart);
  }

  return (
    <div className='wrapper'>
      <Header />
      <Furniture items={stateFurniture} addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;
