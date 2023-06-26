package team.project.mriya.dto.mapper.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import team.project.mriya.dto.UserRequestDto;
import team.project.mriya.dto.mapper.RequestMapper;
import team.project.mriya.model.User;
import team.project.mriya.service.CityService;

@Component
@AllArgsConstructor
public class UserRequestMapper implements RequestMapper<User, UserRequestDto> {
    private CityService cityService;

    @Override
    public User toModel(UserRequestDto dto) {
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setPhone(dto.getPhone());
        user.setCity(cityService.get(dto.getCityId()).get());
        return user;
    }
}
