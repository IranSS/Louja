package com.louja.backend.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.louja.backend.model.ConfigHomeDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;

@RestController
@RequestMapping(value = "/home/configs")
public class ConfigsHomeController {
    @PostMapping("/save")
    public ResponseEntity<?> SaveConfigs(@RequestBody ConfigHomeDTO configs){
        ObjectMapper mapper = new ObjectMapper();
        try{
            File arquivo = new File("./configs_page/configs_page.json");
            mapper.writeValue(arquivo, configs);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Configurações não salvas: " + e);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(configs);
    }
}
