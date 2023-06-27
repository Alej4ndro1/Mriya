package team.project.mriya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.project.mriya.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
