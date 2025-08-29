package com.louja.backend.controllers;

import com.louja.backend.model.produto.ProdutoDTO;
import com.louja.backend.repositories.ProdutoRepository;
import com.louja.backend.model.produto.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoController {

    @Autowired
    ProdutoRepository produtoRepository;

    @PostMapping(value = "/publicar", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> PostProduto(@RequestParam("nome") String nome,
                                               @RequestParam("descricao") String descricao,
                                               @RequestParam("preco") float preco,
                                               @RequestParam("tags") List<String> tags,
                                               @RequestParam("imagem") MultipartFile imagem){
        try {
            //Criando diretorio
            String pastaDestino = "uploads/";
            Files.createDirectories(Paths.get(pastaDestino));

            // gerando nome
            String nomeArquivo = System.currentTimeMillis() + "_" + imagem.getOriginalFilename();
            //caminho completo
            Path caminhoImagem = Paths.get(pastaDestino + nomeArquivo);
            //salvar no sistema
            Files.copy(imagem.getInputStream(), caminhoImagem, StandardCopyOption.REPLACE_EXISTING);

            Produto produto = new Produto(nome, descricao,preco, tags);
            produto.setUrlImagem("/uploads/" + nomeArquivo);

            this.produtoRepository.save(produto);
            return ResponseEntity.status(HttpStatus.CREATED).body(produto);
        }catch (IOException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro o salvar a imagem");
        }
    }

    @GetMapping("/listar")
    public List<Produto> GetProdutos(){
        List<Produto>listProduto = produtoRepository.findAll();
        return listProduto;
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Object> GetProduto(@PathVariable UUID id){
        Optional<Produto>produto = produtoRepository.findById(id);

        if(produto.isEmpty()){
            System.out.println("Item não encontrado");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        else{
            return ResponseEntity.status(HttpStatus.FOUND).body(produto);
        }
    }
    @DeleteMapping("/deletar/{id}")
    public HttpStatus DeleteProduto(@PathVariable UUID id){
        if(produtoRepository.findById(id).isEmpty()){
            System.out.println("Item não encontrado");
            return HttpStatus.NOT_FOUND;
        }
        else{
            produtoRepository.deleteById(id);
            System.out.println("item com o id " + id + " deletado com sucesso!");
            return HttpStatus.OK;
        }
    }
}
