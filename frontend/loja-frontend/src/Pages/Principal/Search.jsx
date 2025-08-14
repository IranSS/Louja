import Home from "./Home";
import SearchComponent from "../../components/search/SearchComponent";
import Painel from "../../components/Painel";
import MyFooter from "../../components/interface/MyFooter";


function Search() {
  return (
    <div style={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
      <Home loginOrShopping={true}></Home>
      <div className="search">
        <SearchComponent></SearchComponent>
      </div>
      <main>
        <Painel
          categoria={`Você pesquisou por "${localStorage.getItem(
            "pesquisa_recente"
          )}"`}
          tag={""}
          nome={localStorage.getItem("pesquisa_recente")}
        ></Painel>
      </main>
      <MyFooter></MyFooter>
    </div>
  );
}
export default Search;
