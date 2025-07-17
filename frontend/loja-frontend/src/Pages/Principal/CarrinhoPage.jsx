import CarrinhoComponent from "../../components/CarrinhoComponent";
import CarrinhoProcessarPedido from "../../components/CarrinhoProcessarPedido";
import Home from "./Home";

import "./../../Styles/HomeStyle.css";

function CarrinhoPage() {
  return (
    <div>
      <Home loginOrShopping={true}></Home>
      <div className="ProcessarPedido">
        <CarrinhoComponent></CarrinhoComponent>
        <CarrinhoProcessarPedido></CarrinhoProcessarPedido>
      </div>
    </div>
  );
}
export default CarrinhoPage;
