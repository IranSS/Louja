import { useState } from "react";
import { useAuth } from "../Configs/Auth/AuthProvider";
import axios from "axios";

import "./../Styles/GerenciarProdutoStyle.css";

function AddProduto() {
  const { token } = useAuth();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [tags, setTags] = useState("");
  const [imagem, setImagem] = useState(null);


  const handleAddProduto = async (e) => {
    e.preventDefault();
    const tagsArray = tags.split(",").map((tag) => tag.trim());
    const precoFormatado = preco.replace(",", ".");
    const precoFloat = parseFloat(precoFormatado);

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("preco", precoFloat);
    tagsArray.forEach((tag) => formData.append("tags", tag));
    formData.append("imagem", imagem);

    try {
      await axios.post("http://localhost:8080/produto/publicar", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log("Erro: ", error);
    }
    window.location.reload();
  };

  //visualizar imagem
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        localStorage.setItem("imagemProduto", base64Data)
      };
      reader.readAsDataURL(file);
    }
    window.location.reload();
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
      <form onSubmit={handleAddProduto} className="containerAddProdutos">
        <h2>Adicionar produto</h2>
        <p>Nome</p>
        <input
          className="input-gerenciar"
          type="text"
          placeholder="Insira o nome do produto"
          onChange={(e) => setNome(e.target.value)}
        />
        <p>Preço</p>
        <input
          className="input-gerenciar"
          type="text"
          placeholder="Insira o preço do produto"
          onChange={(e) => setPreco(e.target.value)}
        />
        <p>Descrição</p>
        <textarea
          type="text"
          placeholder="Descrição do produto"
          onChange={(e) => setDescricao(e.target.value)}
        />
        <p>Tags</p>
        <textarea
          type="text"
          placeholder="Ex: (FPS, Mundo aberto, RPG, etc...)"
          onChange={(e) => setTags(e.target.value)}
        />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <input
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
