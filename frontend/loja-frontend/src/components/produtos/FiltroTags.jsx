import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

import axios from "axios";

import "./../../Styles/GerenciarPrateleiraStyle.css";

function FiltroTags({
  quantidadeDeTags,
  classNameController,
  onChange,
  message,
  placeholderMessage,
  showSelects,
  value = [] }) {
  const [selecionadas, setSelecionadas] = useState([]);
  const [valorNoInput, setvalorNoInput] = useState("");

  const [tamanhoDoFiltro, setTamanhoDoFiltro] = useState(5);
  const [filtro, setFiltro] = useState("");
  const [tags, setTags] = useState([]);

  const tagsFiltradas = tags.filter(
    (tagObj) => typeof
      tagObj.tag === "string" &&
      tagObj.tag.toLowerCase().startsWith(filtro.toLowerCase())
  );

  // se o filtro estiver vazio ou nulo, reseta o tamanho do filtro para 5
  // para mostrar novamente a lista
  useEffect(() => {
    if(filtro === "" || filtro === null){
      setTamanhoDoFiltro(5);
    }
  }, [filtro]);

  // Recebendo lista de todas as categorias de jogos
  useEffect(() => {
    axios
      .get("http://localhost:8080/tags/get-todas-tags")
      .then((res) => {
        setTags(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos", err);
      });
  }, []);

  // Função para lidar com a seleção das checkboxes
  const handleAddTag = (opcao) => {
    let novasSelecionadas;
    if (value.includes(opcao)) {
      novasSelecionadas = value.filter((item) => item !== opcao);
      setFiltro("");
    } else {
      if (quantidadeDeTags === 0) {
        novasSelecionadas = [...value, opcao];
        setFiltro("");
      } else {
        if (quantidadeDeTags === 0) {
          novasSelecionadas = [...value, opcao];
          setFiltro("");
        }
        else {
          // Se já houver uma tag selecionada, substitui a primeira
          novasSelecionadas = [opcao];
          setFiltro(opcao);
          setTamanhoDoFiltro(0);
        }
      }
      setSelecionadas(novasSelecionadas);
      onChange?.(novasSelecionadas);
    }
  };
  //remover tag
  const handleRemoveTag = (tag) => {
    const novasSelecionadas = value.filter((item) => item !== tag);
    setSelecionadas(novasSelecionadas);
    onChange?.(novasSelecionadas);
    setFiltro("");
  };

  return (
    // filtro-tags-container
    <div className={classNameController}>
      <p className="title-filtro">{message}</p>

      <input
        name="filtro-input"
        type="text"
        autoComplete="off"
        className="input-personalizar-layout"
        placeholder={placeholderMessage}
        value={filtro} onChange={(e) => {
          setFiltro(e.target.value); 
          setTamanhoDoFiltro(5);
        }} />

      {filtro.length > 0 && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "9px",
        }}>
          {tagsFiltradas.slice(0, tamanhoDoFiltro).map((tagObj) =>
            !value.includes(tagObj.tag) ? (
              <label
                className="tag-label"
                key={tagObj.id}
              >
                {tagObj.tag}
                {<Plus className="AddIcon"
                  onClick={() => handleAddTag(tagObj.tag)}></Plus>}
              </label>
            ) : null
          )}
        </div>
      )}
      {/* se selecionados for true, mostra */}
      {showSelects === true ? (<div
        className="container-selecionados"
        style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <p className="para-selecionados-filtro">Tags selecionadas:&nbsp;
          {value.map((tag, idx) => (
            <span
              className="tag-selecionada"
              key={tag}
              style={{ display: "flex", alignItems: "center" }}>
              {tag}
              {idx < value.length - 1}
              {<X className="Icon" onClick={() => handleRemoveTag(tag)}></X>}
            </span>
          ))}
        </p>
      </div>) : (null)}
    </div>
  );
}
export default FiltroTags;
