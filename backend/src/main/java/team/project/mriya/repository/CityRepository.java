package team.project.mriya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.project.mriya.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
}
