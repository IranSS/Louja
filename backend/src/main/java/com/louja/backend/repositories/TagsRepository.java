package com.louja.backend.repositories;

import com.louja.backend.model.tags.TagModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TagsRepository extends JpaRepository<TagModel, UUID> {
}
