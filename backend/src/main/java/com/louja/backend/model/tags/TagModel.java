package com.louja.backend.model.tags;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

@Entity
@Table(name = "TAGS")
public class TagModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID ID;
    @NotNull
    @NotBlank
    private String tag;

    public TagModel() {
        this.tag = tag;
    }

    public TagModel(String tag) {
        this.tag = tag;
    }

    public UUID getID() {
        return ID;
    }

    public void setID(UUID ID) {
        this.ID = ID;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
