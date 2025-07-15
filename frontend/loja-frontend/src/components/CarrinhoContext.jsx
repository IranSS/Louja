import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(produto) {
    console.log("Produto adicionado: ", produto);
    setCartItems((prev) => [...prev, produto]);
  }
  function atualizarCarrinho(novaLista) {
    setCartItems(novaLista);
    console.log("Lista atualizada");
  }
  return (
    <CarrinhoContext.Provider
      value={{ cartItems, addToCart, atualizarCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
export function useCart() {
  return useContext(CarrinhoContext);
}
