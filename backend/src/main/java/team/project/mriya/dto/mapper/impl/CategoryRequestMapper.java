package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.CategoryRequestDto;
import team.project.mriya.dto.mapper.RequestMapper;
import team.project.mriya.model.Category;

@Component
public class CategoryRequestMapper implements RequestMapper<Category, CategoryRequestDto> {
    @Override
    public Category toModel(CategoryRequestDto dto) {
        Category category = new Category();
        category.setName(dto.getName());
        if (dto.getParentId() != null) {
            category.setParentId(dto.getParentId());
        }
        return category;
    }
}
