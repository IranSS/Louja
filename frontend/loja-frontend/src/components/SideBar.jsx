import "./../Styles/SideBarStyle.css";
import { X, User, Settings, LogOut } from "lucide-react";
import { useAuth } from "../Configs/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

import { useCart } from "./CarrinhoContext";

function SideBar({ isOpen, toggleSlideBar }) {
  const { logout, role } = useAuth();
  const {limparCarrinho} = useCart();

  const navigate = useNavigate();

  const clickHandle = () => {
    limparCarrinho();
    logout();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className={`sidebar ${isOpen ? `open` : ""}`}>
      <X
        onClick={toggleSlideBar}
        style={{
          cursor: "pointer",
          position: "absolute",
          left: "1rem",
          top: "0.8rem",
        }}
      ></X>
      <ul>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <li onClick={() => navigate("/perfil")}>
            <div className="menu-item">
              <User className="icon"></User>
              <p>Perfil</p>
            </div>
          </li>
          {
            role?.role === "ADMIN" ? (
            <li onClick={() => navigate("/produto/publicar")}>
              <div className="menu-item">
                <Settings className="icon"></Settings>
                <p>Gerenciar</p>
              </div>
            </li>) : (null)
          }
          <li onClick={clickHandle}>
            <div className="menu-item">
              <LogOut className="icon"></LogOut>
              <p>Sair</p>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default SideBar;
