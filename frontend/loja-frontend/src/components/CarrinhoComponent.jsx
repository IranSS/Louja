import { useCart } from "../components/CarrinhoContext";
import { useEffect } from "react";
import { Trash } from "lucide-react";

import "./../Styles/CarrinhoStyle.css";

function CarrinhoComponent() {
  const { cartItems, atualizarCarrinho } = useCart();

  useEffect(() => {
    console.log("Carrinho carregado:", cartItems);
  }, [cartItems]);

  function removeItem(produto) {
    const updateCarrinho = cartItems.filter((item) => item.id !== produto.id);
    atualizarCarrinho(updateCarrinho);
  }

  return (
    <div className="container-principal-carrinho-component">
      <h2
        style={{
          marginTop: "1rem",
          marginBottom: "0.4rem",
          marginLeft: "1rem",
        }}
      >
        Produtos no carrinho
      </h2>
      <div className="lista-produtos">
        <div className="carrinho">
          {cartItems.length === 0 ? (
            <h3>Carrinho vazio</h3>
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
      </div>
    </div>
  );
}
export default CarrinhoComponent;
