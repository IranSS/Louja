import { useAuth } from "../../Configs/Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function Home({ textLoginOrUser }) {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  console.log("user" + user?.name);

  const clickHandle = () => {
    logout();
    window.location.reload();
  };

  return (
    <header className="containerHeader">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>Louja</h1>
      </Link>
      {textLoginOrUser ? (
        <div className="containerButtonLogin">
          {!token ? (
            <button
              className="LoginAndLogout"
              onClick={() => navigate("/login")}
            >
              Login/Register
            </button>
          ) : (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p className="nameUser" style={{ paddingRight: "0.8rem" }}>
                {user?.name}
              </p>
              <button className="LoginAndLogout" onClick={clickHandle}>
                Sair
              </button>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
}
export default Home;
