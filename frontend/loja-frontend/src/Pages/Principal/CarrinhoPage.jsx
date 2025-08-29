import CarrinhoComponent from "../../components/CarrinhoComponent";
import CarrinhoProcessarPedido from "../../components/CarrinhoProcessarPedido";
import Home from "./Home";
import MyFooter from "../../components/interface/MyFooter";
import FecharPedido from "../../components/carrinho/fecharPedido";

import "./../../Styles/HomeStyle.css";
import { useState } from "react";

function CarrinhoPage() {
  const [valor, setValor] = useState(false);
  const [finalizar, setFinalizar] = useState(false);

  const HandleShowFinal = (novoValor) => {
    setValor(novoValor);
  };
  const finalizandoCompra = (fechar) => {
    setFinalizar(fechar);
  };
  return (
    <div>
      <Home loginOrShopping={true}></Home>
      <div className="ProcessarPedido">
        <CarrinhoComponent></CarrinhoComponent>
        <CarrinhoProcessarPedido
          valorDoPai={HandleShowFinal}
        ></CarrinhoProcessarPedido>
        {valor === true ? (
          <FecharPedido
            Mostrar={HandleShowFinal}
            finalizar={finalizandoCompra}
          ></FecharPedido>
        ) : null}
      </div>
      <MyFooter></MyFooter>
    </div>
  );
}
export default CarrinhoPage;
