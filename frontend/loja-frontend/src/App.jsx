import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CarrinhoContext";
import { useAuth, AuthProvider } from "./Configs/Auth/AuthProvider";

import LoginAndAuth from "./Pages/Auth/LoginPage";
import PageProdutos from "./Pages/Produtos/PageProdutos";
import RegisterPage from "./Pages/Auth/RegisterPage";
import GerenciarProdutos from "./Pages/Produtos/GerenciarProdutos";
import Search from "./Pages/Principal/Search";
import CarrinhoPage from "./Pages/Principal/CarrinhoPage";
import PerfilPage from "./Pages/Auth/PerfilPage";

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <RoutesWrapper/>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

function RoutesWrapper(){
  const { role } = useAuth();

  return (
    <Routes>
      <Route path={"/"} element={<PageProdutos />}></Route>
      <Route path="/login" element={<LoginAndAuth />}></Route>
      <Route path="/registrar" element={<RegisterPage />} />
        {role?.role === "ADMIN" && (
          <Route path="/produto/publicar" element={<GerenciarProdutos />} />
        )}
      <Route path="/pesquisar" element={<Search />} />
      <Route path="/carrinho" element={<CarrinhoPage />} />
      <Route path="/perfil" element={<PerfilPage></PerfilPage>}></Route>
    </Routes>
  )
}

export default App;
