import { create } from 'zustand';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
}

export interface Order {
  id: string;
  fullName: string;
  size: string;
  toppings: string[];
  createdAt: string;
  items?: OrderItem[];  // Add items array for menu orders
  name?: string;  // Keep for backward compatibility
}

interface OrderStore {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt'>) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  addOrder: (orderData) => {
    set((state) => ({
      orders: [
        {
          id: crypto.randomUUID(), // Use crypto.randomUUID() for unique IDs
          ...orderData,
          createdAt: new Date().toISOString(),
        },
        ...state.orders,
      ],
    }));
  },
}));