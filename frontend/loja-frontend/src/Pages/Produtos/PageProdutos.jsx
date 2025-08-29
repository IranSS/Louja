import Home from "../Principal/Home";
import MyFooter from "../../components/interface/MyFooter";
import Painel from "../../components/Painel";
import SearchComponent from "../../components/search/SearchComponent";

import configs_paineis from "../../../../../backend/configs_page/configs_page.json";

import "../../Styles/HomeStyle.css";
import { useEffect } from "react";

function PageProdutos() {
  const quantidadePaineis = parseInt(configs_paineis.quantidadep, 10) || 0;
  const tags_produtos = configs_paineis.tags || [];

  useEffect(() => {
    console.log("tags produtos: ", tags_produtos);
  }, [tags_produtos]);

  return (
    <div>
      <Home loginOrShopping={true} />
      <main>
        <div className="search">
          <SearchComponent></SearchComponent>
        </div>
        {quantidadePaineis > 0 && Array.from({ length: quantidadePaineis }).map((_, index) => (
          <Painel key={index} categoria={tags_produtos[index]} tag={tags_produtos[index]}></Painel>
        ))}
      </main>
      <MyFooter></MyFooter>
    </div>
  );
}
export default PageProdutos;
