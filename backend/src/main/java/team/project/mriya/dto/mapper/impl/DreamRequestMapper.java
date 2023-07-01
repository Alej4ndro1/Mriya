package team.project.mriya.dto.mapper.impl;

import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import team.project.mriya.dto.DreamRequestDto;
import team.project.mriya.dto.mapper.RequestMapper;
import team.project.mriya.model.Dream;
import team.project.mriya.service.CategoryService;
import team.project.mriya.service.CityService;
import team.project.mriya.service.DonateService;
import team.project.mriya.service.DreamTypeService;
import team.project.mriya.service.UserService;

@Component
@AllArgsConstructor
public class DreamRequestMapper implements RequestMapper<Dream, DreamRequestDto> {
    private UserService userService;
    private DreamTypeService dreamTypeService;
    private CategoryService categoryService;
    private CityService cityService;
    private DonateService donateService;

    @Override
    public Dream toModel(DreamRequestDto dto) {
        Dream dream = new Dream();
        dream.setUser(userService.get(dto.getUserId()).get());
        dream.setDreamType(dreamTypeService.get(dto.getDreamTypeId()).get());
        dream.setCategories(dto.getCategoryIds().stream()
                .map(ci -> categoryService.get(ci).get())
                .collect(Collectors.toList()));
        dream.setCity(cityService.get(dto.getCityId()).get());
        dream.setName(dto.getName());
        dream.setDescription(dto.getDescription());

        dream.setFilename(dto.getFilename());
        dream.setMimeType(dto.getMimeType());
        dream.setImageData(dto.getImageData());

        dream.setAge(dto.getAge());
        dream.setAmount(dto.getAmount());
        dream.setLikes(dto.getLikes());
        dream.setStatus(Dream.DreamStatus.valueOf(dto.getStatusName().toUpperCase()));
        dream.setDateStart(dto.getDateStart());
        dream.setDateEnd(dto.getDateEnd());
        if (dto.getDonatesIds() != null && dto.getDonatesIds().size() > 0) {
            dream.setDonates(dto.getDonatesIds().stream()
                    .map(id -> donateService.get(id).get())
                    .collect(Collectors.toList()));
        }
        return dream;
    }
}
