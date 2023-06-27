package team.project.mriya.controller;

import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team.project.mriya.dto.DreamRequestDto;
import team.project.mriya.dto.DreamResponseDto;
import team.project.mriya.dto.mapper.impl.DreamRequestMapper;
import team.project.mriya.dto.mapper.impl.DreamResponseMapper;
import team.project.mriya.model.Dream;
import team.project.mriya.service.DreamService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/dream")
public class DreamController {
    private DreamService dreamService;
    private DreamRequestMapper dreamRequestMapper;
    private DreamResponseMapper dreamResponseMapper;

    @PostMapping("/add")
    public DreamResponseDto addDream(@RequestBody DreamRequestDto dreamRequestDto ) {
        Dream dream = dreamService.add(dreamRequestMapper.toModel(dreamRequestDto));
        return dreamResponseMapper.toDto(dream);
    }

    @GetMapping
    public List<DreamResponseDto> getAll() {
        return dreamService.getAll().stream()
                .map(d -> dreamResponseMapper.toDto(d))
                .collect(Collectors.toList());
    }

    @PutMapping
    public DreamResponseDto update(@RequestBody DreamRequestDto dreamRequestDto,
                                   @RequestParam (name = "id") Long id) {
        Dream dream = dreamRequestMapper.toModel(dreamRequestDto);
        dream.setId(id);
        return dreamResponseMapper.toDto(dreamService.update(dream));
    }
}
