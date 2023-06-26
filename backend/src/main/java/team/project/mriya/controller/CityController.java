package team.project.mriya.controller;

import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.project.mriya.dto.CityResponseDto;
import team.project.mriya.dto.mapper.impl.CityResponseMapper;
import team.project.mriya.service.CityService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/cities")
public class CityController {
    private CityService cityService;
    private CityResponseMapper cityResponseMapper;

    @GetMapping
    public List<CityResponseDto> getAll() {
        return cityService.getAll().stream()
                .map(c -> cityResponseMapper.toDto(c))
                .collect(Collectors.toList());
    }


}
