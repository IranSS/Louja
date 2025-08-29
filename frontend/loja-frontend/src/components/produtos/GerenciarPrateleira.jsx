import { useState } from "react";
import { useAuth } from "./../../Configs/Auth/AuthProvider";
import axios from "axios";
import FiltroTags from "./FiltroTags";
import MyScnack from "./../interface/MySnackBar.jsx"

import { useNavigate } from "react-router-dom";

import "./../../Styles/GerenciarPrateleiraStyle.css";

function GerenciarPrateleira() {
  const { token } = useAuth();
  const [valor, setValor] = useState(0);
  const [listaDeTags, setListaDeTags] = useState([]);
  const [quantidadePaineis, setQuantidadePaineis] = useState(0);
  const [snackMessage, setSnackMessage] = useState({ message: "", type: "" });
  const nav = useNavigate();

  const configs = {
    quantidadep: quantidadePaineis,
    tags: listaDeTags.flat(),
  };

  // salva as configurações em /assets/configs_pagina_inicial.json
  const salvarConfigs = async () => {
    try {
      await axios.post("http://localhost:8080/home/configs/save", configs, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSnackMessage({ message: "Quantidade de painéis definida com sucesso", type: "success" });
    } catch (error) {
      console.log("Erro: ", error);
      setSnackMessage({ message: "Erro ao salvar configurações", type: "error" });
    }

    //Recarrega a página
    const timer = setTimeout(() => {
      window.location.reload();
    }, 900);
  };
  //Define a quantidade maxima de paineis, o maximo são 5
  const handleDefinirQuantidade = () => {
    if (valor > 5) {
      setSnackMessage({ message: "A quantidade máxima de painéis é 5", type: "error" });
      setQuantidadePaineis(5);
      setValor(5);
    }
    else if (valor < 0) {
      setSnackMessage({ message: "A quantidade mínima de painéis é 0", type: "error" });
      setQuantidadePaineis(0);
      setValor(0);
    }
    else {
      setQuantidadePaineis(valor);
    }
  };

  // Atualiza as tags de um painel específico
  const atualizarTagsDoPainel = (index, tagsSelecionadas) => {
    setListaDeTags(prevTags => {
      const novaLista = [...prevTags];
      novaLista[index] = tagsSelecionadas; // atualiza apenas o painel correto
      return novaLista;
    });
  };

  return (
    <div className="container-gerenciar-prateleira">
      <MyScnack message={snackMessage.message} type={snackMessage.type} onClose={() => setSnackMessage({ message: "", type: "" })}></MyScnack>
      <div className="quantidade-paineis-input">
        <h3>Quantidade de painéis na página inicial</h3>
        <input
          className="input-personalizar-layout"
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <button className="button-personalizar-layout" onClick={handleDefinirQuantidade} type="submit">Definir</button>
      </div>

      {quantidadePaineis > 0 &&
        Array.from({ length: quantidadePaineis }).map((_, index) => (
          <FiltroTags
            classNameController={"filtro-tags-container"}
            key={index}
            checkBox={false}
            placeholderMessage={"Digite a categoria desejada ex: (Corrida)"}
            quantidadeDeTags={1}
            onChange={(tags) => {
              const novaLista = [...listaDeTags];
              novaLista[index] = tags;
              setListaDeTags(novaLista);
            }}
          />
        ))}
      <button className="button-personalizar-layout" onClick={salvarConfigs}>Salvar Configurações</button>
    </div>
  );
}

export default GerenciarPrateleira;
