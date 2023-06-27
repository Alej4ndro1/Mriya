package team.project.mriya.dto.mapper.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import team.project.mriya.dto.DonateRequestDto;
import team.project.mriya.dto.mapper.RequestMapper;
import team.project.mriya.model.Donate;
import team.project.mriya.service.DreamService;
import team.project.mriya.service.UserService;

@Component
@AllArgsConstructor
public class DonateRequestMapper implements RequestMapper<Donate, DonateRequestDto> {
    private UserService userService;
    private DreamService dreamService;

    @Override
    public Donate toModel(DonateRequestDto dto) {
        Donate donate = new Donate();
        donate.setDatePay(dto.getDatePay());
        donate.setSum(dto.getSum());
        // todo: обдумати роботу з Optional
        donate.setUser(userService.get(dto.getUserId()).get());
        return donate;
    }
}
