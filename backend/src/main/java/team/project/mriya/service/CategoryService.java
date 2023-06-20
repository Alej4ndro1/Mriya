package team.project.mriya.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.Category;
import team.project.mriya.repository.CategoryRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryService {
    private CategoryRepository categoryRepository;

    public Category add(Category category) {
        return categoryRepository.save(category);
    }

    public Category update(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> get(Long id) {
        return categoryRepository.findById(id);
    }

    public List<Category> getAllParent() {
        return categoryRepository.findAllByParentIdIsNull();
    }

    public List<Category> getAllChild(Long parentId) {
        return categoryRepository.findAllByParentId(parentId);
    }

    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
}
