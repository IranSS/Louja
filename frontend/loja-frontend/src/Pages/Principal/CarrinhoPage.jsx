import CarrinhoComponent from "../../components/CarrinhoComponent";
import Home from "./Home";

function CarrinhoPage() {
  return (
    <div>
      <Home textLoginOrUser={true}></Home>
      <CarrinhoComponent></CarrinhoComponent>
    </div>
  );
}
export default CarrinhoPage;
