package team.project.mriya.controller;

import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.project.mriya.dto.DreamTypeResponseDto;
import team.project.mriya.dto.mapper.impl.DreamTypeResponseMapper;
import team.project.mriya.service.DreamTypeService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/dream-type")
public class DreamTypeController {
    private DreamTypeService dreamTypeService;
    private DreamTypeResponseMapper mapper;

    @GetMapping
    @ApiOperation(value = "Get all dream types", notes = "return list with all dream types")
    public List<DreamTypeResponseDto> getALl() {
        return dreamTypeService.getAll().stream()
                .map(d -> mapper.toDto(d))
                .collect(Collectors.toList());
    }
}
