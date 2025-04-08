import React from 'react';
import { FaPizzaSlice, FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../store/cartStore';
import Cart from './Cart';

interface PizzaItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular: boolean;
}

const pizzas: PizzaItem[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    description: 'Fresh tomatoes, mozzarella, basil, and extra virgin olive oil',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    popular: true,
  },
  {
    id: '2',
    name: 'Pepperoni Feast',
    description: 'Classic pepperoni with extra cheese and our signature tomato sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    popular: true,
  },
  {
    id: '3',
    name: 'Veggie Delight',
    description: 'Bell peppers, mushrooms, onions, and black olives on a whole wheat crust',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    popular: false,
  },
  {
    id: '4',
    name: 'Hawaiian Paradise',
    description: 'Ham, pineapple, and mozzarella with a sweet and tangy sauce',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    popular: true,
  },
];

const Menu: React.FC = () => {
  const { addItem } = useCartStore();

  const handleAddToCart = (pizza: PizzaItem) => {
    addItem({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaPizzaSlice className="text-5xl text-red-500 mr-4 animate-bounce" />
            <h1 className="text-5xl font-bold text-gray-900">
              Our Menu
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of handcrafted pizzas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-64 object-cover"
                />
                {pizza.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FaStar className="mr-1" />
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pizza.name}</h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">${pizza.price}</span>
                  <button 
                    onClick={() => handleAddToCart(pizza)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Menu;