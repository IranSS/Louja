import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCart } from "./CarrinhoContext";

function Painel({ categoria, tag, nome }) {
  const { addToCart, cartItems } = useCart();
  const [productPerView, setProductPerView] = useState(4);
  const [spaceBetweenProdutos, setSpaceBetweenProdutos] = useState(0);
  const [centerSlideProduto, setCenterSlideProduto] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  //filtro, se não tiver tag vai buscar pelo nome
  const produtosFiltrados = produtos.filter((produto) => {
    if (tag !== "") {
      return Array.isArray(produto.tags) && produto.tags.includes(tag);
    } else {
      return (
        typeof produto.nome === "string" &&
        produto.nome.toLowerCase().startsWith(nome.toLowerCase())
      );
    }
  });

  //organiza o tamanho das janelas reajustando os slides
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setProductPerView(1);
      } else if (window.innerWidth <= 985) {
        setProductPerView(2);
      } else if (window.innerWidth <= 1500) {
        setProductPerView(3);
      } else {
        setProductPerView(4);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (produtosFiltrados.length <= 2 && window.innerWidth >= 985) {
      //Para 2 produtos
      setSpaceBetweenProdutos(400);
      setCenterSlideProduto(false);
    } else if (
      //mais de 3
      produtosFiltrados.length > 2 &&
      produtosFiltrados.length < 4 &&
      window.innerWidth >= 985
    ) {
      setSpaceBetweenProdutos(300);
      setCenterSlideProduto(false);
    } else {
      //slide completa fix
      setSpaceBetweenProdutos(0);
      setCenterSlideProduto(false);
    }
  });
  //recebendo lista de todos os produtos
  useEffect(() => {
    axios
      .get("http://localhost:8080/produto/listar")
      .then((res) => {
        setProdutos(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos", err);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      });
  }, []);

    useEffect(() => {
      console.log("painel carrinho: ", cartItems);
      const teste = () => {
        
      }
      teste();
  }, [cartItems]);

  return (
    <div>
      <h2 className="h2Categorias">{categoria}</h2>
      {produtosFiltrados.length !== 0 ? (
        <div className="containerListaProdutos">
          <Swiper
            spaceBetween={spaceBetweenProdutos}
            modules={[Navigation]}
            slidesPerView={productPerView}
            pagination={{ clickable: false }}
            centeredSlides={centerSlideProduto}
            navigation
          >
            {produtosFiltrados.map((produto) => (
              <SwiperSlide key={produto.id}>
                <div className="produto">
                  <img src={"http://localhost:8080" + produto.urlImagem} />
                  <br />
                  <p>{produto.nome}</p>
                  <div>
                    {
                      <button
                        className="buttonComprar"
                        onClick={() =>
                          localStorage.getItem("token") === null ? (
                            (alert("você tem que logar na sua conta"))
                          ) : (cartItems.some(item => item.id === produto.id)
                            ? alert("Produto já está no carrinho")
                            : addToCart(produto))
                        }
                      >
                        R$ {produto.preco.toFixed(2)}
                      </button>
                    }
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
}

export default Painel;
