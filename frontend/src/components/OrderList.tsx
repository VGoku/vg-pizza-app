import React from 'react';
import { FaFilter, FaPizzaSlice, FaCalendarAlt } from 'react-icons/fa';

interface Order {
  id: string;
  fullName: string;
  size: string;
  toppings: string[];
  createdAt: string;
}

interface OrderListProps {
  orders: Order[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, filter, onFilterChange }) => {
  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(order => order.size === filter);

  const getToppingName = (id: string) => {
    const toppings: { [key: string]: string } = {
      '1': 'Pepperoni',
      '2': 'Green Peppers',
      '3': 'Pineapple',
      '4': 'Mushrooms',
      '5': 'Ham',
    };
    return toppings[id] || id;
  };

  const getSizeLabel = (size: string) => {
    const sizes: { [key: string]: string } = {
      'S': 'Small (10")',
      'M': 'Medium (12")',
      'L': 'Large (14")',
    };
    return sizes[size] || size;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <FaPizzaSlice className="mr-3" />
            Order History
          </h2>
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
            <FaFilter className="text-white" />
            <div className="flex space-x-2">
              {['All', 'S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  data-testid={`filterBtn${size}`}
                  onClick={() => onFilterChange(size)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                    filter === size
                      ? 'bg-white text-red-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {size === 'All' ? 'All' : getSizeLabel(size)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-8">
              <FaPizzaSlice className="text-5xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No orders found</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-200 border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{order.fullName}</h3>
                    <div className="flex items-center text-gray-500 mt-1">
                      <FaCalendarAlt className="mr-2" />
                      <p className="text-sm">
                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    {getSizeLabel(order.size)}
                  </span>
                </div>
                
                {order.toppings.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Toppings:</h4>
                    <div className="flex flex-wrap gap-2">
                      {order.toppings.map((toppingId) => (
                        <span
                          key={toppingId}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs border border-gray-200 shadow-sm"
                        >
                          {getToppingName(toppingId)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList; 