package team.project.mriya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.project.mriya.model.Dream;

@Repository
public interface DreamRepository extends JpaRepository<Dream, Long> {
}
