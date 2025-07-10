import CarrinhoComponent from "../../components/CarrinhoComponent";
import Home from "./Home";

import "./../../Styles/HomeStyle.css";

function CarrinhoPage() {
  return (
    <div>
      <Home textLoginOrUser={true}></Home>
      <CarrinhoComponent></CarrinhoComponent>
    </div>
  );
}
export default CarrinhoPage;
