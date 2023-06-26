package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.CityResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.City;

@Component
public class CityResponseMapper implements ResponseMapper<City, CityResponseDto> {
    @Override
    public CityResponseDto toDto(City entity) {
        CityResponseDto dto = new CityResponseDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }
}
