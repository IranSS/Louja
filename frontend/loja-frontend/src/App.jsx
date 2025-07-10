import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LoginAndAuth from "./Pages/Auth/LoginPage";
import PageProdutos from "./Pages/Produtos/PageProdutos";
import { AuthProvider } from "./Configs/Auth/AuthProvider";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AddProduto from "./components/AddProduto";
import Search from "./Pages/Principal/Search";
import { CartProvider } from "./components/CarrinhoContext";
import CarrinhoPage from "./Pages/Principal/CarrinhoPage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<PageProdutos />}></Route>
            <Route path="/login" element={<LoginAndAuth />}></Route>
            <Route path="/registrar" element={<RegisterPage />} />
            <Route path="/produto/publicar" element={<AddProduto />} />
            <Route path="/search" element={<Search />} />
            <Route path="/carrinho" element={<CarrinhoPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
