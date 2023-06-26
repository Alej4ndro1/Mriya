package team.project.mriya.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.project.mriya.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findAllByParentId(Long parentId);

    List<Category> findAllByParentIdIsNull();
}
