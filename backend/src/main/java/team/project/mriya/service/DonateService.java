package team.project.mriya.service;

import java.math.BigDecimal;
import java.util.HashSet;
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

    public BigDecimal getSumDonatesForDream(List<Long> listIds) {
        if (listIds == null || listIds.size() == 0) {
            return BigDecimal.ZERO;
        }
        HashSet<Long> setIds = new HashSet<>(listIds);
        return donateRepository.findAllByIdIn(setIds)
                .stream()
                .map(Donate::getSum)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
