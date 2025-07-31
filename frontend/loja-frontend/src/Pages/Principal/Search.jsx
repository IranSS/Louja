import Home from "./Home";
import SearchComponent from "../../components/search/SearchComponent";
import Painel from "../../components/Painel";
function Search() {
  return (
    <div>
      <Home loginOrShopping={true}></Home>
      <div className="search">
          <SearchComponent></SearchComponent>
      </div>
      <Painel categoria={`Você pesquisou por "${localStorage.getItem("pesquisa_recente")}"`} 
      tag={""} nome={localStorage.getItem("pesquisa_recente")}></Painel>
    </div>
  );
}
export default Search;
