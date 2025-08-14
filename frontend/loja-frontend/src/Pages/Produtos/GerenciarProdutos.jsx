import Home from "../Principal/Home";
import AddProduto from "../../components/AddProduto";
import ProductSlide from "../../components/produtos/ProductSlide";
import { useState } from "react";

function GerenciarProdutos() {
  const [imagemPreview, setImagemPreview] = useState(null);

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
          <AddProduto setImagemPreview={setImagemPreview}></AddProduto>
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
          <ProductSlide imagemPreview={imagemPreview}></ProductSlide>
        </div>
      </div>
    </div>
  );
}
export default GerenciarProdutos;
