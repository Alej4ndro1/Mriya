package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.UserResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.User;

@Component
public class UserResponseMapper implements ResponseMapper<User, UserResponseDto> {
    @Override
    public UserResponseDto toDto(User entity) {
        UserResponseDto dto = new UserResponseDto();
        dto.setId(entity.getId());
        dto.setRoleId(entity.getRole().getId());
        dto.setEmail(entity.getEmail());
        dto.setPib(entity.getPib());
        dto.setBirthday(entity.getBirthday());
        dto.setPhone(entity.getPhone());
        dto.setDateRegistration(entity.getDateRegistration());
        dto.setDateClose(entity.getDateClose());
        dto.setCityId(entity.getCity().getId());
        return dto;
    }
}
