package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.CityRequestDto;
import team.project.mriya.dto.mapper.RequestMapper;
import team.project.mriya.model.City;

@Component
public class CityRequestMapper implements RequestMapper<City, CityRequestDto> {
    @Override
    public City toModel(CityRequestDto dto) {
        City city = new City();
        city.setName(dto.getName());
        return city;
    }
}
