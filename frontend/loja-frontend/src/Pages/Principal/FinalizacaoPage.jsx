import Home from "./Home";
import MyFooter from "./../../components/interface/MyFooter";
import PedidoEncerrado from "../../components/carrinho/PedidoEncerrado";

function FinalizacaoPage(){
    return <>
        <Home></Home>
        <main className="principal-encerramento">
            <PedidoEncerrado></PedidoEncerrado>
        </main>
        <MyFooter></MyFooter>
    </>
}
export default FinalizacaoPage;