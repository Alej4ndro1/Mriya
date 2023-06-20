package team.project.mriya.dto.mapper.impl;

import org.springframework.stereotype.Component;
import team.project.mriya.dto.DonateResponseDto;
import team.project.mriya.dto.mapper.ResponseMapper;
import team.project.mriya.model.Donate;

@Component
public class DonateResponseMapper implements ResponseMapper<Donate, DonateResponseDto> {
    @Override
    public DonateResponseDto toDto(Donate entity) {
        DonateResponseDto dto = new DonateResponseDto();
        dto.setId(entity.getId());
        dto.setSum(entity.getSum());
        dto.setDatePay(entity.getDatePay());
        dto.setDreamId(entity.getDream().getId());
        dto.setUserId(entity.getUser().getId());
        return dto;
    }
}
