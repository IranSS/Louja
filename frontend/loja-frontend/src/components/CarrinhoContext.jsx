import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(produto) {
    console.log("Produto adicionado: ", produto);
    setCartItems((prev) => [...prev, produto]);
  }
  return (
    <CarrinhoContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
export function useCart() {
  return useContext(CarrinhoContext);
}
