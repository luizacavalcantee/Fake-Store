import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      isCartOpen: false,

      addToCart: (product: Product) => {
        const cartItems = get().items;
        const existingItem = cartItems.find((item) => item.id === product.id);

        let updatedItems;
        if (existingItem) {
          updatedItems = cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedItems = [...cartItems, { ...product, quantity: 1 }];
        }
        
        set((state) => ({
            items: updatedItems,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
        }));
      },

      removeFromCart: (productId: number) => {
        const itemToRemove = get().items.find(item => item.id === productId);
        if (!itemToRemove) return;

        set(state => ({
            items: state.items.filter((item) => item.id !== productId),
            totalItems: state.totalItems - itemToRemove.quantity,
            totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
        }));
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        set(state => {
            const itemToUpdate = state.items.find(item => item.id === productId);
            if(!itemToUpdate) return state;

            const quantityDiff = quantity - itemToUpdate.quantity;
            const priceDiff = quantityDiff * itemToUpdate.price;

            return {
                items: state.items.map(item => item.id === productId ? {...item, quantity} : item),
                totalItems: state.totalItems + quantityDiff,
                totalPrice: state.totalPrice + priceDiff,
            }
        });
      },

      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    
    {
      name: 'shopping-cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
