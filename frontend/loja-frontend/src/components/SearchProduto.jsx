import { useState } from "react";
import Painel from "./Painel";

function SearchProduto() {
  const [pesquisa, setPesquisa] = useState("");

  function pesquisar() {
    const valor = document.getElementById("teste").value;
    setPesquisa(valor);
    localStorage.setItem("pesquisa_recente", pesquisa);
    console.log(pesquisa);
  }

  return (
    <div>
      <div className="inputSearch">
        <input type="text" id="teste" placeholder="Digite pelo nome do jogo" />
        <button onClick={pesquisar}>Pesquisar</button>
      </div>
      {pesquisa !== "" ? (
        <Painel
          className="campo-resultado"
          categoria={`Você pesquisou por "${pesquisa}"`}
          tag=""
          nome={pesquisa}
        ></Painel>
      ) : null}
    </div>
  );
}

export default SearchProduto;
