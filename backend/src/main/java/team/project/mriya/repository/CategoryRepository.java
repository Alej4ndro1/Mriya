package team.project.mriya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.project.mriya.model.Category;
import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findAllByParentId(Long parentId);

    List<Category> findAllByParentIdIsNull();
}
