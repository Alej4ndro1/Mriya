package team.project.mriya.service;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.DreamType;
import team.project.mriya.repository.DreamTypeRepository;

@Service
@AllArgsConstructor
public class DreamTypeService {
    private DreamTypeRepository dreamTypeRepository;

    public DreamType add(DreamType dreamType) {
        return dreamTypeRepository.save(dreamType);
    }

    public DreamType update(DreamType dreamType) {
        return dreamTypeRepository.save(dreamType);
    }

    public Optional<DreamType> get(Long id) {
        return dreamTypeRepository.findById(id);
    }

    public List<DreamType> getAll() {
        return dreamTypeRepository.findAll();
    }
}
