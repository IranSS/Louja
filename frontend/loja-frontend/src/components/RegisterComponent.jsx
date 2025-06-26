import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ChevronLeft } from "lucide-react";

function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleConfirm = async () => {
    const userExists = await validUser();
    if (userExists) {
      alert("Já existe um usuario com este email cadastrado!");
      return;
    } else if (password.includes(" ") || confirmPassword.includes(" ")) {
      alert("A senha não pode ter espaços");
      setPassword("");
      setConfirmPassword("");
    } else if (password != confirmPassword) {
      alert("As senhas são diferentes");
      setPassword("");
      setConfirmPassword("");
    } else {
      handleRegister();
      navigate("/login");
    }
  };
  const validUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/auth/valid-user",
        {
          params: { email },
        }
      );
      return response.data.exists;
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log("Erro ao fazer o cadastro: ", error);
    }
  };

  return (
    <div className="wrapper">
      <ChevronLeft
        className="ChevronLeft2"
        size={38}
        onClick={() => navigate("/login")}
      ></ChevronLeft>
      <div></div>
      <div className="container-register">
        <h2>Cadastre-se</h2>
        <div className="campo-nome" style={{ width: "100%" }}>
          <div className="top"></div>
          <p className="TextRegister">Nome</p>
          <input
            className="inputs"
            type="text"
            placeholder="Insira seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>
        <div className="campo-email" style={{ width: "100%" }}>
          <p className="TextRegister">Email</p>
          <input
            className="inputs"
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>
        <div className="campo-senha" style={{ width: "100%" }}>
          <p className="TextRegister">Senha</p>
          <input
            className="inputs"
            type="password"
            placeholder="Insira sua senha"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>
        <div className="campo-confirmar-senha" style={{ width: "100%" }}>
          <p className="TextRegister">Confirme sua senha</p>
          <input
            className="inputs"
            type="password"
            autoComplete="new-password"
            placeholder="Repita sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="ButtonRegister" onClick={handleConfirm}>
          Registrar
        </button>
      </div>
    </div>
  );
}
export default RegisterComponent;
