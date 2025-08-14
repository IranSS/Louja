import { useAuth } from "../../Configs/Auth/AuthProvider";
import { CircleCheckBig } from "lucide-react";

import "./../../Styles/PedidoEncerrado.css";

function PedidoEncerrado() {
  const { email } = useAuth();
  return (
    <div className="container-mensagem">
      <div className="mensagem">
        <CircleCheckBig size={50} className="icon-check"></CircleCheckBig>
        <p className="final-agrad">Obrigado!</p>
        <p className="final-message"> Sua compra foi concluída com sucesso.</p>
      </div>
      <p className="para">As chaves de ativação foram enviadas para {email?.email}.</p>
    </div>
  );
}
export default PedidoEncerrado;
