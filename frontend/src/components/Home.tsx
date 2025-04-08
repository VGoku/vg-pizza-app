import React, { useEffect, useState } from 'react';
import PizzaForm from './PizzaForm';
import OrderList from './OrderList';
import { FaPizzaSlice } from 'react-icons/fa';

interface Order {
  id: string;
  fullName: string;
  size: string;
  toppings: string[];
  createdAt: string;
}

// Mock data for initial orders
const mockOrders: Order[] = [
  {
    id: '1',
    fullName: 'John Doe',
    size: 'M',
    toppings: ['1', '3', '5'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    size: 'L',
    toppings: ['2', '4'],
    createdAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
  },
];

const Home: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [filter, setFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate API call with a delay
  const fetchOrders = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setOrders(mockOrders);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Failed to fetch orders. Please try again later.');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSubmit = async (orderData: {
    fullName: string;
    size: string;
    toppings: string[];
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newOrder: Order = {
        id: Date.now().toString(),
        ...orderData,
        createdAt: new Date().toISOString(),
      };
      setOrders(prevOrders => [newOrder, ...prevOrders]);
    } catch (err: any) {
      setError('An error occurred while placing your order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div 
        className="fixed inset-0"
        style={{ zIndex: -1 }}
      >
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <img src="https://images.unsplash.com/photo-1594007654729-407eedc4be65" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3" alt="" className="w-full h-full object-cover rounded-xl hidden md:block" />
        </div>
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content Container */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FaPizzaSlice className="text-5xl text-red-500 mr-4 animate-bounce" />
              <h1 className="text-5xl font-bold text-gray-900">
                Pizza Paradise
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Craft your perfect pizza and track your delicious journey through our order history
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <PizzaForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                error={error}
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <OrderList
                orders={orders}
                filter={filter}
                onFilterChange={setFilter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;