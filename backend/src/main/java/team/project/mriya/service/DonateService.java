package team.project.mriya.service;

import org.springframework.stereotype.Service;
import team.project.mriya.model.Donate;
import team.project.mriya.repository.DonateRepository;
import java.util.List;
import java.util.Optional;

@Service
public class DonateService {
    DonateRepository donateRepository;

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
