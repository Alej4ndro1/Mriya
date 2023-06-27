package team.project.mriya.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.project.mriya.dto.CategoryResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.Category;
import team.project.mriya.service.CategoryService;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/api/categories")
public class CategoryController {
    private CategoryService categoryService;
    private ResponseMapper<Category, CategoryResponseDto> mapper;

    @GetMapping("/")
    public List<CategoryResponseDto> getAll() {
        return categoryService.getAll().stream()
                .map(c -> mapper.toDto(c))
                .collect(Collectors.toList());
    }
}
