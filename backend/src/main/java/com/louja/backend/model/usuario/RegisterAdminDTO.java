package com.louja.backend.model.usuario;

public record RegisterAdminDTO(String email, String password, UserRole role) {
}
