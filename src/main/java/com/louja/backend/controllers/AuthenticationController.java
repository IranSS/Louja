package com.louja.backend.controllers;

import com.louja.backend.model.usuario.*;
import com.louja.backend.service.TokenService;
import com.louja.backend.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    TokenService tokenService;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }
    //registra um usuario no banco de dados
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data){
        if(this.userRepository.findByEmail(data.email()).isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        else{
            String encryptPassword = new BCryptPasswordEncoder().encode(data.password());
            User newUser = new User(data.name(), data.email(), encryptPassword, UserRole.USER);
            if(newUser.getRole() == null){
                System.out.println("Role inserido" + newUser.getRole());
            }
            else{
                System.out.println("salvando " + newUser.getRole());
                this.userRepository.save(newUser);
            }
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }
    //verifica se um usuario está no banco de dados retornando true ou false
    @GetMapping("/valid-user")
    public ResponseEntity<Map<String, Boolean>> userIsPresent(@RequestParam String email){
        Boolean exists = userRepository.existsByEmail(email);
        return ResponseEntity.ok(Map.of("exists", exists));
    }

    //retorna um email de um usuario
    @GetMapping("/get-user")
    public ResponseEntity<?> getUser(@RequestParam String email){
        return userRepository.findByEmail(email)
                .map(user -> ResponseEntity.ok(new UserNameDTO(user.getName(), user.getRole())))
                .orElse(ResponseEntity.notFound().build());
    }
    //criar post de admin usando DTO RegisterAdminDTO
    @GetMapping("/lista")
    public List<User> getAllUser(){
        List<User> teste = userRepository.findAll();
        return teste;
    }
}
