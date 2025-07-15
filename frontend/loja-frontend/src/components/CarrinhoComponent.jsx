import { useCart } from "../components/CarrinhoContext";
import { useEffect } from "react";
import { Trash } from "lucide-react";

import "./../Styles/CarrinhoStyle.css";

function CarrinhoComponent() {
  const { cartItems, atualizarCarrinho } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.preco, 0);

  useEffect(() => {
    console.log("Carrinho carregado:", cartItems);
  }, [cartItems]);

  function removeItem(produto) {
    const updateCarrinho = cartItems.filter((item) => item.id !== produto.id);
    atualizarCarrinho(updateCarrinho);
  }

  return (
    <div>
      <h2
        style={{
          marginTop: "1rem",
          marginBottom: "0.4rem",
          marginLeft: "1rem",
        }}
      >
        Produtos no carrinho
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "center",
        }}
      >
        <div className="carrinho">
          {cartItems.length === 0 ? (
            <p>carrrinho vazio</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} style={{ display: "flex" }}>
                    <div className="produtoNoCarrinho">
                      <img
                        className="imageProduto"
                        src={"http://localhost:8080" + item.urlImagem}
                      />
                      <div className="ProdutoInfos">
                        <div className="headerInfos">
                          <h3 className="NomeProduto" style={{ margin: "0" }}>
                            {item.nome}
                          </h3>
                          <Trash
                            className="RemoveButton"
                            onClick={() => removeItem(item)}
                          ></Trash>
                        </div>
                        <p className="descricao">{item.descricao}</p>
                        <p className="valorProduto">
                          R$ {item.preco.toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div>
          <p>valor total: {total.toFixed(2).replace(".", ",")}</p>
        </div>
      </div>
    </div>
  );
}
export default CarrinhoComponent;
