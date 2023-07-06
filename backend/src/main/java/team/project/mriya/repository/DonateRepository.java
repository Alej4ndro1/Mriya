package team.project.mriya.repository;

import java.util.List;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.project.mriya.model.Donate;

@Repository
public interface DonateRepository extends JpaRepository<Donate, Long> {
    List<Donate> findAllByIdIn(Set<Long> ids);
}
