import React from 'react';
import Header from './components/header'
import Commerce from './components/commerce'
import Product from './components/product';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <>
    <Header />
    <Product />
    <Commerce>
      <Commerce.Contact />
    </Commerce>
    </>)
}

export default App;
