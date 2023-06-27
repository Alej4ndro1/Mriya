package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.DreamTypeRequestDto;
import team.project.mriya.dto.mapper.RequestMapper;
import team.project.mriya.model.DreamType;

@Component
public class DreamTypeRequestMapper implements RequestMapper<DreamType, DreamTypeRequestDto> {
    @Override
    public DreamType toModel(DreamTypeRequestDto dto) {
        DreamType dreamType = new DreamType();
        dreamType.setName(dto.getName());
        return dreamType;
    }
}
