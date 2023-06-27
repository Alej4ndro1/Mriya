package team.project.mriya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.project.mriya.model.DreamType;

@Repository
public interface DreamTypeRepository extends JpaRepository<DreamType, Long> {
}
