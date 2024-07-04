import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <p className="text-sm mb-2">${product.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
