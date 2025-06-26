package com.louja.backend.model.produto;

import java.util.List;
import java.util.UUID;

public record ProdutoDTO(String nome, String descricao, float preco, List<String> tags, String urlImagem) {
    public UUID getId(){return this.getId();}
}
