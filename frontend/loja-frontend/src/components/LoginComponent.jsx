import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Configs/Auth/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

import { ChevronLeft } from "lucide-react";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      const token = resposta.data.token;

      const userResponse = await axios.get(
        "http://localhost:8080/auth/get-user",
        {
          params: { email },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userName = userResponse.data.name;

      login(token, { name: userName });
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer o login: ", error);
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="container-todo-campo">
      <form onSubmit={handleLogin}>
        <div className="loginTop">
          <ChevronLeft
            className="ChevronLeft"
            size={38}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          ></ChevronLeft>
        </div>
        <h2 className="h2text">Entrar</h2>
        <div className="login-container">
          <div>
            <p>Email</p>
            <input
              className="inputs-Login"
              type="email"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Senha</p>
            <input
              className="inputs-Login"
              type="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="Button-Login" type="submit">
            Entrar
          </button>
        </div>
        <div className="refCadastro">
          <p>não tem cadastro?</p>
          <Link to={"/registrar"} style={{ color: "white" }}>
            <p style={{ padding: "0" }}>clique aqui</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
