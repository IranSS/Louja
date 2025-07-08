import { useAuth } from "../../Configs/Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Carrinho from "../../components/Carrinho";
import SideBar from "../../components/SideBar";
import { useState } from "react";
import { Menu } from "lucide-react";

function Home({ loginOrShopping }) {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const toggleSlideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  return (
    <header className="containerHeader">
      {token != null ? (
        <div>
          <Menu
            className="menu-btn"
            onClick={toggleSlideBar}
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              left: "1rem",
              top: "0.8rem",
              cursor: "pointer",
            }}
          ></Menu>
          <SideBar
            isOpen={isSideBarOpen}
            toggleSlideBar={toggleSlideBar}
          ></SideBar>
        </div>
      ) : null}
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>Louja</h1>
      </Link>
      {loginOrShopping ? (
        <div className="containerButtonLogin">
          {!token ? (
            <button
              className="LoginAndLogout"
              onClick={() => navigate("/login")}
            >
              Login/Register
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Carrinho />
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
}
export default Home;
