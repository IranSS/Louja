import { useState } from "react";
import { useAuth } from "../Configs/Auth/AuthProvider";
import axios from "axios";

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
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="nome do jogo"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="descrição"
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="text"
        placeholder="preço"
        onChange={(e) => setPreco(e.target.value)}
      />
      <input
        type="text"
        placeholder="tags"
        onChange={(e) => setTags(e.target.value)}
      />
      <input type="file" onChange={(e) => setImagem(e.target.files[0])} />
      <button onClick={handleAddProduto}>enviar</button>
    </div>
  );
}

export default AddProduto;
