import Home from "./Home";
import MyFooter from "./../../components/interface/MyFooter";
import PedidoEncerrado from "../../components/carrinho/PedidoEncerrado";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/CarrinhoContext";

function FinalizacaoPage() {
  const nav = useNavigate();
  const { limparCarrinho } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      limparCarrinho();
      nav("/");
      console.log("alou");
    }, 5000);
    return () => clearTimeout(timer);
  }, [nav]);

  return (
    <>
      <Home></Home>
      <main className="principal-encerramento">
        <PedidoEncerrado></PedidoEncerrado>
      </main>
      <MyFooter></MyFooter>
    </>
  );
}
export default FinalizacaoPage;
