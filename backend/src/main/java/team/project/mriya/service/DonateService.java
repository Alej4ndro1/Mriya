package team.project.mriya.service;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.Donate;
import team.project.mriya.repository.DonateRepository;

@Service
@AllArgsConstructor
public class DonateService {
    private DonateRepository donateRepository;

    public Donate add(Donate donate) {
        return donateRepository.save(donate);
    }

    public Optional<Donate> get(Long id) {
        return donateRepository.findById(id);
    }

    public List<Donate> getAll() {
        return donateRepository.findAll();
    }
}
