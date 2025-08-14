import { Linkedin, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./../../Styles/footer.css";

function MyFooter() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="container-footer">
        <div className="campo">
          <p className="titulos-campo">Sobre</p>
          <a
            className="redirecionar"
            href="https://github.com/IranSS/Louja"
            target="_blank"
          >
            Repositório
          </a>
          <a className="redirecionar" href="">qualquer coisa</a>
        </div>
        <div className="divisor-vertical"></div>
        <div className="campo">
          <p className="titulos-campo">Links</p>
          <a className="redirecionar" onClick={() => navigate("/")}>
            página inicial
          </a>
          <a className="redirecionar" onClick={() => navigate("/pesquisar")}>
            página de pesquisa
          </a>
        </div>
        <div className="divisor-vertical"></div>
        <div className="campo">
          <p className="titulos-campo">Redes Sociais</p>
          <div className="redes-sociais">
            <a
              className="redirecionar"
              href="https://github.com/IranSS"
              target="blank"
            >
              GitHub do desenvolvedor
            </a>
            <Github className="icon-footer"></Github>
          </div>
          <div className="redes-sociais">
            <a
              className="redirecionar"
              href="https://www.linkedin.com/in/iranildosousa/"
              target="_blank"
            >
              Linkedin do desenvolvedor
            </a>
            <Linkedin className="icon-footer"></Linkedin>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default MyFooter;
