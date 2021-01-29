import React from 'react';
import Header from './components/header'
import Commerce from './components/commerce'
import Product from './components/product';


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
