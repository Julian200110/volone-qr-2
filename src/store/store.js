import { create } from "zustand";

const useStore = create((set) => ({
  cartItems: [],
  favorites: [],
  language: "es",
  selectedItem: null,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.title === item.title);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (itemTitle) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.title !== itemTitle),
    })),

  updateQuantity: (itemTitle, newQuantity) =>
    set((state) => {
      if (newQuantity < 1) {
        return {
          cartItems: state.cartItems.filter((item) => item.title !== itemTitle),
        };
      }
      return {
        cartItems: state.cartItems.map((item) =>
          item.title === itemTitle ? { ...item, quantity: newQuantity } : item
        ),
      };
    }),

  toggleFavorite: (itemTitle) =>
    set((state) => ({
      favorites: state.favorites.includes(itemTitle)
        ? state.favorites.filter((item) => item !== itemTitle)
        : [...state.favorites, itemTitle],
    })),

  setLanguage: (language) => set(() => ({ language })),
  setSelectedItem: (selectedItem) => set(() => ({ selectedItem })),
}));

export default useStore;
