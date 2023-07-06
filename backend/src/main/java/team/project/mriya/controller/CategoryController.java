package team.project.mriya.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.project.mriya.dto.CategoryResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.Category;
import team.project.mriya.service.CategoryService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/category")
public class CategoryController {
    private CategoryService categoryService;
    private ResponseMapper<Category, CategoryResponseDto> mapper;

    @GetMapping("/")
    @ApiOperation(value = "Return all categories",
            notes = "List continue all categories parent and child")
    public List<CategoryResponseDto> getAll() {
        return categoryService.getAll().stream()
                .map(c -> mapper.toDto(c))
                .collect(Collectors.toList());
    }

    @GetMapping("/parents")
    @ApiOperation(value = "Return only parent categories",
            notes = "List continue all parent categories")
    public List<CategoryResponseDto> getParents() {
        return categoryService.getAllParent().stream()
                .map(c -> mapper.toDto(c))
                .collect(Collectors.toList());
    }

    @GetMapping("/parents/{id}")
    @ApiOperation(value = "Return parent by id",
            notes = "Return parent by id")
    public CategoryResponseDto getParentById(
            @PathVariable(name = "id") @ApiParam(name = "id", value = "Parent id") Long id) {
        return mapper.toDto(categoryService.get(id).get());
    }

    @GetMapping("/parents/{id}/children")
    @ApiOperation(value = "Return only child categories for parent",
            notes = "List continue all child categories by parent id")
    public List<CategoryResponseDto> getChildForParent(
            @PathVariable(name = "id") @ApiParam(name = "id", value = "Parent id") Long id) {
        return categoryService.getAllChild(id).stream()
                .map(c -> mapper.toDto(c))
                .collect(Collectors.toList());
    }
}
