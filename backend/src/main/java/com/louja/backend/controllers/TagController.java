package com.louja.backend.controllers;

import com.louja.backend.model.tags.TagDTO;
import com.louja.backend.model.tags.TagModel;
import com.louja.backend.repositories.TagsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tags")
public class TagController {

    @Autowired
    TagsRepository tagsRepository;

    @GetMapping("/get-todas-tags")
    public ResponseEntity getTags(){
        List<TagModel>tags = tagsRepository.findAll();
        return ResponseEntity.status(HttpStatus.CREATED).body(tags);
    }
    @PostMapping("/enviar-tag")
    public ResponseEntity<?> postTag(@RequestBody List<TagDTO> tagDTO){
        for(TagDTO tag : tagDTO){
            TagModel tagModel = new TagModel(tag.tag());
            try {
                tagsRepository.save(tagModel);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return ResponseEntity.ok("Tags salvas com sucesso");
    }
}
