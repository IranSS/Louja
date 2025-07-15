import { useCart } from "./CarrinhoContext";

function CarrinhoProcessarPedido() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.preco, 0);
  return (
    <div className="Container-processar">
      <div className="campo-processar-predido">
        <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
        <button className="button-processar-pedido">Fechar Pedido</button>
      </div>
    </div>
  );
}
export default CarrinhoProcessarPedido;
