import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold my-4">Shopping Cart</h1>
        <div className="container mx-auto">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
