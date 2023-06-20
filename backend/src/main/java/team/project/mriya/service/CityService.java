package team.project.mriya.service;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.City;
import team.project.mriya.repository.CityRepository;

@Service
@AllArgsConstructor
public class CityService {
    private CityRepository cityRepository;

    public City add(City city) {
        return cityRepository.save(city);
    }

    public City update(City city) {
        return cityRepository.save(city);
    }

    public Optional<City> get(Long id) {
        return cityRepository.findById(id);
    }

    public List<City> getAll() {
        return cityRepository.findAll();
    }
}
