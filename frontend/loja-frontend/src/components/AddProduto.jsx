import { useRef, useState, useEffect } from "react";
import { useAuth } from "../Configs/Auth/AuthProvider";

import axios from "axios";
import MySnackBar from "./interface/MySnackBar.jsx"
import FiltroTags from "./produtos/FiltroTags.jsx";

import "./../Styles/GerenciarProdutoStyle.css";

function AddProduto({ setNomePreview, setPrecoPreview, setImagemPreview }) {
  const { token } = useAuth();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [listaDeTags, setListaDeTags] = useState([]);

  const [imagem, setImagem] = useState(null);
  const [message, setMessage] = useState({ message: "", type: "" });
  const fileInputRef = useRef(null);


  const handleAddProduto = async (e) => {
    e.preventDefault();
    const precoFormatado = preco.replace(",", ".");
    const precoFloat = parseFloat(precoFormatado);

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("preco", precoFloat);
    listaDeTags.forEach((tag) => formData.append("tags", tag));
    formData.append("imagem", imagem);

    //enviar para backend
    try {
      await axios.post("http://localhost:8080/produto/publicar", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
    } catch (error) {
      console.log("Erro: ", error);
      setMessage({ message: "Não foi possivel enviar o produto", type: "error" });
      return;
    }

    setMessage({ message: "Produto enviado com sucesso", type: "success" });
    resetForm();
  };

  //resetar formulario
  const resetForm = () => {
    setListaDeTags([]);
    setNome("");
    setNomePreview("");
    setPreco(0);
    setPrecoPreview(0);
    setDescricao("");
    setImagem(null);
    setImagemPreview(null);
    fileInputRef.current.value = null;

    console.log("form resetado lista: ", listaDeTags);
  };

  //visualizar nome no preview
  const handleNome = (event) => {
    setNome(event.target.value);
    setNomePreview(event.target.value);
  }
  //visualizar preço no preview
  const handlePreco = (event) => {
    const valorDigitado = event.target.value;
    setPreco(event.target.value);

    const precoFloat = parseFloat(valorDigitado.replace(",", "."));;
    setPrecoPreview(precoFloat || 0);
  }
  //visualizar imagem
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemPreview(reader.result);
        setImagem(event.target.files[0]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "calc(100vh - 50.38px)",
        alignItems: "center",
      }}
    >
      <MySnackBar message={message.message} type={message.type} onClose={() => setMessage({ message: "", type: "" })}></MySnackBar>
      <form onSubmit={handleAddProduto} className="containerAddProdutos">
        <h2>Adicionar produto</h2>
        <p>Nome</p>
        <input
          className="input-gerenciar"
          type="text"
          placeholder="Insira o nome do produto"
          value={nome}
          onChange={handleNome}
        />
        <p>Preço</p>
        <input
          className="input-gerenciar"
          type="text"
          placeholder="Insira o preço do produto"
          value={preco}
          onChange={handlePreco}
        />
        <p>Descrição</p>
        <textarea
          type="text"
          placeholder="Descrição do produto"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <FiltroTags
          classNameController={"filtro-tags-addProduto"}
          quantidadeDeTags={0}
          showSelects={true}
          checkBox={null}
          message={"Escolha as tags do produto"}
          placeholderMessage={"Ex: (FPS, Mundo aberto, RPG, etc...)"}
          value={listaDeTags}
          onChange={(tags) => {
            setListaDeTags(tags)
          }}
        />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <input
            ref={fileInputRef}
            type="file"
            id="fileInput"
            accept="image/*"
            className="file-input"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput" className="custom-file-button">
            Escolher imagem de capa
          </label>
        </div>
        <button type="submit" className="enviar-dados">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default AddProduto;
