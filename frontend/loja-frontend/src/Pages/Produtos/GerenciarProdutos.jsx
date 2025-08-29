import Home from "../Principal/Home";
import AddProduto from "../../components/AddProduto";
import ProductSlide from "../../components/produtos/ProductSlide";
import { useState } from "react";

function GerenciarProdutos() {
  const [imagem, setImagem] = useState(null);
  const [nomeProduto, setNomeProduto] = useState("Nome");
  const [preco, setPreco] = useState(0);

  return (
    <div>
      <Home></Home>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
        }}
      >
        <div style={{ width: "50%", justifyItems: "center" }}>
          <AddProduto setNomePreview={setNomeProduto} setPrecoPreview={setPreco} setImagemPreview={setImagem}></AddProduto>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <p>Preview</p>
          <ProductSlide nomePreview={nomeProduto} precoPreview={preco} imagemPreview={imagem}></ProductSlide>
        </div>
      </div>
    </div>
  );
}
export default GerenciarProdutos;
