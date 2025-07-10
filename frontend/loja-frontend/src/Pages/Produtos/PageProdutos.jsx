import Home from "../Principal/Home";
import Painel from "../../components/Painel";
import { useNavigate } from "react-router-dom";

import "../../Styles/HomeStyle.css";

function PageProdutos() {
  const navigate = useNavigate();

  function SearchPage() {
    navigate("/search");
  }
  return (
    <div>
      <Home loginOrShopping={true} />
      <main>
        <div className="ButtonSearchPage">
          <button onClick={SearchPage}>Pesquisar por jogos</button>
        </div>
        <Painel
          categoria={"jogos de primeira pessoa(FPS)"}
          tag={"FPS"}
        ></Painel>
        <Painel categoria="Jogos de RPG" tag={"RPG"}></Painel>
        <Painel categoria="Jogos de ação" tag={"Ação"}></Painel>
      </main>
    </div>
  );
}
export default PageProdutos;
