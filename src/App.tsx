import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FurnitureItemsType, items } from './products/products';
import Furniture from './components/Furniture';

function App() {

  const [state, setState] = useState<FurnitureItemsType>(items);

  return (
    <div className='wrapper'>
      <Header />
      <Furniture items={state} />
      <Footer />
    </div>
  );
}

export default App;
