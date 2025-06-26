import Home from "./Home";
import SearchProduto from "../../components/SearchProduto";

function Search() {
  return (
    <div>
      <Home textLoginOrUser={true}></Home>
      <SearchProduto />
    </div>
  );
}
export default Search;
