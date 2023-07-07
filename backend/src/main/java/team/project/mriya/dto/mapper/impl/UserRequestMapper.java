package team.project.mriya.dto.mapper.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import team.project.mriya.dto.UserRequestDto;
import team.project.mriya.dto.mapper.RequestMapper;
import team.project.mriya.model.User;
import team.project.mriya.service.CityService;
import team.project.mriya.service.RoleService;

@Component
@AllArgsConstructor
public class UserRequestMapper implements RequestMapper<User, UserRequestDto> {
    private CityService cityService;
    private RoleService roleService;

    @Override
    public User toModel(UserRequestDto dto) {
        User user = new User();
        user.setRole(roleService.get(dto.getRoleId()).get());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setPib(dto.getPib());
        user.setBirthday(dto.getBirthday());
        user.setPhone(dto.getPhone());
        user.setDateRegistration(dto.getDateRegistration());
        user.setDateClose(dto.getDateClose());
        user.setCity(cityService.get(dto.getCityId()).get());
        return user;
    }
}
