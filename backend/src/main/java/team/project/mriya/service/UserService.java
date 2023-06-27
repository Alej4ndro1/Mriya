package team.project.mriya.service;

import java.time.LocalDate;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.User;
import team.project.mriya.repository.UserRepository;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;

    public User add(User user) {
        return userRepository.save(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public Optional<User> get(Long id) {
        return userRepository.findById(id);
    }

    public void close(Long id) {
        User user = userRepository.findById(id).get();
        user.setDateClose(LocalDate.now());
        userRepository.save(user);
    }
}
