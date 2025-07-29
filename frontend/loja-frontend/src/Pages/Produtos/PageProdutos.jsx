import Home from "../Principal/Home";
import Painel from "../../components/Painel";

import SearchFunction from "../../components/search/SearchComponent";

import "../../Styles/HomeStyle.css";

function PageProdutos() {

  return (
    <div>
      <Home loginOrShopping={true} />
      <main>
        <div className="search">
          <SearchFunction></SearchFunction>
        </div>
        <Painel
          categoria={"jogos de primeira pessoa(FPS)"}
          tag={"FPS"}
        ></Painel>
        <Painel categoria="Jogos de RPG" tag={"RPG"}></Painel>
        <Painel categoria="Destaques" tag={"+"}></Painel>
      </main>
    </div>
  );
}
export default PageProdutos;
