package team.project.mriya.dto.mapper.impl;

import java.math.BigDecimal;
import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
import team.project.mriya.dto.DreamResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.Category;
import team.project.mriya.model.Donate;
import team.project.mriya.model.Dream;

@Component
public class DreamResponseMapper implements ResponseMapper<Dream, DreamResponseDto> {
    @Override
    public DreamResponseDto toDto(Dream entity) {
        DreamResponseDto dto = new DreamResponseDto();
        dto.setId(entity.getId());
        dto.setUserId(entity.getUser().getId());
        dto.setDreamTypeId(entity.getDreamType().getId());
        dto.setCategoryIds(entity.getCategories().stream()
                .map(Category::getId)
                .collect(Collectors.toList()));
        dto.setCityId(entity.getCity().getId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());

        dto.setFilename(entity.getFilename());
        dto.setMimeType(entity.getMimeType());
        dto.setImageData(entity.getImageData());

        dto.setAge(entity.getAge());
        dto.setAmount(entity.getAmount());
        dto.setLikes(entity.getLikes());
        dto.setStatusName(entity.getStatus().getName());
        dto.setDateStart(entity.getDateStart());
        dto.setDateEnd(entity.getDateEnd());
        if (entity.getDonates() != null && entity.getDonates().size() > 0) {
            dto.setDonatesIds(entity.getDonates().stream()
                    .map(Donate::getId)
                    .collect(Collectors.toList()));
        }
        dto.setSumOfDonates(BigDecimal.ZERO);
        return dto;
    }
}
