import { createContext, useContext, useEffect, useState } from "react";

const CarrinhoContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(produto) {
    console.log("Produto adicionado: ", produto);
    setCartItems((prev) => [...prev, produto]);
  }
  function atualizarCarrinho(novaLista) {
    setCartItems(novaLista);
    console.log("Lista atualizada");
  }
  function limparCarrinho(){
    setCartItems([]);
    localStorage.removeItem("cartItems");
    console.log("limpo");
  }
  return (
    <CarrinhoContext.Provider
      value={{ cartItems, addToCart, atualizarCarrinho, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
export function useCart() {
  return useContext(CarrinhoContext);
}
