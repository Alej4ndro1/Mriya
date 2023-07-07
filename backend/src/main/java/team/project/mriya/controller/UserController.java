package team.project.mriya.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team.project.mriya.dto.UserRequestDto;
import team.project.mriya.dto.UserResponseDto;
import team.project.mriya.dto.mapper.impl.UserRequestMapper;
import team.project.mriya.dto.mapper.impl.UserResponseMapper;
import team.project.mriya.model.User;
import team.project.mriya.service.UserService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private UserService userService;
    private UserResponseMapper userResponseMapper;
    private UserRequestMapper userRequestMapper;

    @GetMapping
    public UserResponseDto getUser(@RequestParam(name = "id") Long id) {
        return userResponseMapper.toDto(userService.get(id).get());
    }

    @PostMapping
    public UserResponseDto addUser(@RequestBody UserRequestDto userRequestDto) {
        User user = userService.add(userRequestMapper.toModel(userRequestDto));
        return userResponseMapper.toDto(user);
    }

    @DeleteMapping
    public void closeUser(@RequestParam(name = "id") Long id) {
        userService.close(id);
    }
}
