import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../CarrinhoContext";

function SearchComponent(){
    const [valueInput, setValueInput] = useState();
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const {addToCart, cartItems} = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const [pesquisa, setPesquisa] = useState("");

    //redireciona para a página exclusiva de pesquisas
    const pesquisar = () =>  {
        localStorage.setItem("pesquisa_recente", pesquisa);
        console.log(pesquisa);
        if(location.pathname == "/pesquisar"){
            console.log("teste");
            window.location.reload();
        }
        else{
            navigate("/pesquisar");
        }
    }

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
        const valor = document.getElementById("InputSearch").value;
        setPesquisa(valor);
        localStorage.setItem("pesquisa_recente", pesquisa);
    }, [valueInput])

     return (
     <div className="container-Search">
        <div className="campo-search">
            <input autoComplete="off" id="InputSearch" className="InputSearch" 
            type="text" placeholder="pesquisar" onChange={
                (valor) => (setValueInput(valor.target.value))}
                onKeyDown={(e) => {if (e.key === "Enter"){
                    pesquisar();
                }}}/>
            <Search className="iconSearch"  size={25} onClick={pesquisar}></Search>
        </div>
        {produtosFiltrados.length !== 0 ? (
            <div className="container-resultados">
                {produtosFiltrados.length === 0 ? (<p></p>) : 
                produtosFiltrados.slice(0,3).map(produto => (
                    <div className="itemNaBarraDeBusca" key={produto.id}>
                        <img src={"http://localhost:8080" + produto.urlImagem} alt="" />
                        <div className="campoAcoesItens">
                            <p>{produto.nome}</p>
                            <button className="buttonComprar"
                                onClick={() => 
                                    localStorage.getItem("token") !== null ? 
                                        (cartItems.some(item => item.id === produto.id)
                                        ? alert("Produto já está no carrinho") : addToCart(produto))
                                    : (alert("primeiro você precisa entrar na sua conta!"))}>R$ 
                                {produto.preco.toFixed(2)}
                            </button>
                        </div>
                    </div>))}
            </div>
        ) : (null)}
        
    </div>
     )
} export default SearchComponent;