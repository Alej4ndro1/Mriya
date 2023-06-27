package team.project.mriya.service;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.Dream;
import team.project.mriya.repository.DreamRepository;

@Service
@AllArgsConstructor
public class DreamService {
    private DreamRepository dreamRepository;

    public Dream add(Dream dream) {
        return dreamRepository.save(dream);
    }

    public Dream update(Dream dream) {
        return dreamRepository.save(dream);
    }

    public Optional<Dream> get(Long id) {
        return dreamRepository.findById(id);
    }

    public List<Dream> getAll() {
        return dreamRepository.findAll();
    }
}
