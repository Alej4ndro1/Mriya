package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.DreamTypeResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.DreamType;

@Component
public class DreamTypeResponseMapper implements ResponseMapper<DreamType, DreamTypeResponseDto> {
    @Override
    public DreamTypeResponseDto toDto(DreamType entity) {
        DreamTypeResponseDto dto = new DreamTypeResponseDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }
}
