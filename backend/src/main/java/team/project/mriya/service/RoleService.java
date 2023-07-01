package team.project.mriya.service;

import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.Role;
import team.project.mriya.repository.RoleRepository;

@Service
@AllArgsConstructor
public class RoleService {
    private RoleRepository roleRepository;

    public Optional<Role> get(Long id) {
        return roleRepository.findById(id);
    }
}
