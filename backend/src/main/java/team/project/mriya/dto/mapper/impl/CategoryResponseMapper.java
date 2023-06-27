package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.CategoryResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.Category;

@Component
public class CategoryResponseMapper implements ResponseMapper<Category, CategoryResponseDto> {
    @Override
    public CategoryResponseDto toDto(Category entity) {
        CategoryResponseDto dto = new CategoryResponseDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setParentId(entity.getParentId());
        return dto;
    }
}
