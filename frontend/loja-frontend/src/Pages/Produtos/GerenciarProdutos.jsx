import Home from "../Principal/Home";
import AddProduto from "../../components/AddProduto";
import ProductSlide from "../../components/produtos/ProductSlide";

function GerenciarProdutos() {
  return (
    <div>
      <Home></Home>
      <AddProduto></AddProduto>
      <ProductSlide></ProductSlide>
    </div>
  );
}
export default GerenciarProdutos;
