import { useCart } from "./CarrinhoContext";
import { Link } from "react-router-dom";
function Carrinho() {
  const { cartItems } = useCart();
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <Link
        to={"/carrinho"}
        style={{ display: "flex", textDecoration: "none", color: "inherit" }}
      >
        <p
          style={{
            position: "relative",
            left: "1.58rem",
          }}
        >
          {cartItems.length}
        </p>
        <img
          src=".\src\assets\icons\carrinho.png"
          style={{ width: "35px", height: "30px" }}
        ></img>
        <p
          style={{
            padding: "0.2rem",
            marginRight: "0.8rem",
            marginLeft: "0.1rem",
            position: "relative",
            top: "0.18rem",
          }}
        >
          carrinho
        </p>
      </Link>
    </div>
  );
}
export default Carrinho;
