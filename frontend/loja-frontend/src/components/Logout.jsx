import { useCart } from "./CarrinhoContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const {limparCarrinho} = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    
    limparCarrinho();

    localStorage.removeItem("pesquisa_recente");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 100);
  }, [limparCarrinho, navigate])
  
  return null;
}

export default Logout;
