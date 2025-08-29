import { X } from "lucide-react";
import "./../../Styles/finalizacaoDaCompraStyle.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FecharPedido({ Mostrar, finalizar}) {
  const [opcao1, setOpcao1] = useState(false);
  const [opcao2, setOpcao2] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    
  },[opcao1, opcao2])

  const handleClick = () => {
    Mostrar(false);
    console.log("mostrar", Mostrar);
  };
  const verificarOpcoes = () => {
    if (opcao1 === false && opcao2 === false) {
      alert("Escolha o método de pagamento");
    }
    else if (opcao1 === "on" || opcao2 === "on"){
      //redirecionar
      nav("/encerramento-de-pedido");
      finalizar(true);
      console.log("oi");
    }
    console.log(opcao1, opcao2);
    console.log("clicado");
  }
  return (
    <div className="FecharPedido">
      <X
        className="voltar"
        onClick={handleClick}
        size={35}
        style={{ cursor: "pointer" }}
      ></X>
      <h2 className="titulo-pagamento">Forma de pagamento</h2>
      <fieldset name="" id="">
        <div>
          <p className="enunciado-de-escolha">Cartão de crédito</p>
          <div className="infos">
            <input
              className="radio"
              type="radio"
              id="escolha_1"
              name="formaDePagamento"
              onChange={(e) => setOpcao1(e.target.value)}
            />
            <img
              className="cartao_logo"
              src=".\src\assets\icons\mastercard_logo.jpg"
            />
            <label className="texto" htmlFor="escolha_1">
              **** 9856
            </label>
          </div>
        </div>
        <div className="barra_horizontal"></div>
        <div>
          <p className="enunciado-de-escolha">Pix</p>
          <div className="infos">
            <input
              className="radio"
              type="radio"
              id="escolha_2"
              name="formaDePagamento"
              onChange={(e) => setOpcao2(e.target.value)}
            />
            <img className="pix_logo" src=".\src\assets\icons\pix_logo.png" />
            <label className="texto" htmlFor="escolha_2">
              Código pix é gerado automaticamente
            </label>
          </div>
        </div>
      </fieldset>
      <button onClick={verificarOpcoes} className="button-processar-pedido">Finalizar</button>
    </div>
  );
}
export default FecharPedido;
