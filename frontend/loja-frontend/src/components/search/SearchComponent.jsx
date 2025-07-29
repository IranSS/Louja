import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

function SearchFunction(){
    const [valueInput, setValueInput] = useState();
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    //pegar todos os produtos
    useEffect(() => {
        axios.get("http://localhost:8080/produto/listar")
        .then(resposta => setProdutos(resposta.data))
        .catch(error => {console.log("Erro em pegar produtos: ", error)})
    },[])

    //aqui vai a busca
    useEffect(() => {
        function buscar(valor){
            const resultados =
                produtos.filter(produto => produto.nome
                    .toLowerCase()
                    .startsWith(valor));
            setProdutosFiltrados(resultados);
            return(<div><p>{produtosFiltrados}</p></div>);
        }
        if(valueInput && valueInput.trim() !== null){
            buscar(valueInput.toLowerCase());
            console.log(produtosFiltrados);
        }
        else{
            setProdutosFiltrados([])
        }
    }, [valueInput])

     return (
     <div className="container-Search">
        <div className="campo-search">
            <input className="InputSearch" type="text" placeholder="pesquisar" onChange={(valor) => (setValueInput(valor.target.value))}/>
            <Search className="iconSearch"  size={25}></Search>
        </div>
        {produtosFiltrados.length !== 0 ? (
            <div className="container-resultados">
                {produtosFiltrados.length === 0 ? (<p></p>) : 
                produtosFiltrados.slice(0,3).map(produto => (
                    <div className="itemNaBarraDeBusca" key={produto.id}>
                        <img src={"http://localhost:8080" + produto.urlImagem} alt="" />
                        <div className="campoAcoesItens">
                            <p>{produto.nome}</p>
                            <button className="buttonComprar">R$ {produto.preco.toFixed(2)}</button>
                        </div>
                    </div>))}
            </div>
        ) : (null)}
        
    </div>
     )
} export default SearchFunction;