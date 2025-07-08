import { useCart } from "../components/CarrinhoContext";
import { useEffect } from "react";

function CarrinhoComponent() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.preco, 0);

  useEffect(() => {
    console.log("Carrinho carregado:", cartItems);
  }, [cartItems]);
  return (
    <div>
      <h2>Produtos no carrinho</h2>
      {cartItems.length === 0 ? (
        <p>carrrinho vazio</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: "flex" }}>
                <div className="produto">
                  <img src={"http://localhost:8080" + item.urlImagem} />
                  <p>
                    {item.nome} - R$ {item.preco.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: R$ {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
export default CarrinhoComponent;
