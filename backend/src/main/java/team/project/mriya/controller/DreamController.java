package team.project.mriya.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
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
import team.project.mriya.service.DonateService;
import team.project.mriya.service.DreamService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/dream")
public class DreamController {
    private DreamService dreamService;
    private DreamRequestMapper dreamRequestMapper;
    private DreamResponseMapper dreamResponseMapper;
    private DonateService donateService;

    @PostMapping("/add")
    @ApiOperation(value = "Add new dream to project",
            notes = "Add new dream to DB and return dream object with id")
    public DreamResponseDto addDream(
            @RequestBody @ApiParam(name = "dreamRequestDto", value = "Dream object")
            DreamRequestDto dreamRequestDto) {
        Dream dream = dreamService.add(dreamRequestMapper.toModel(dreamRequestDto));
        return dreamResponseMapper.toDto(dream);
    }

    @GetMapping("/all")
    @ApiOperation(value = "Return all dreams", notes = "Return all dreams from DB")
    public List<DreamResponseDto> getAll() {
        return dreamService.getAll().stream()
                .map(d -> dreamResponseMapper.toDto(d))
                .peek(d -> d.setSumOfDonates(
                        donateService.getSumDonatesForDream(d.getDonatesIds())))
                .collect(Collectors.toList());
    }

    @GetMapping
    @ApiOperation(value = "Return dream by id", notes = "Return dream from DB by id")
    public DreamResponseDto getDream(@RequestParam(name = "id")
                                     @ApiParam(name = "id", value = "Dream id") Long id) {
        DreamResponseDto dreamResponseDto =
                dreamResponseMapper.toDto(dreamService.get(id).get());
        if (dreamResponseDto == null) {
            return null;
        }
        dreamResponseDto.setSumOfDonates(
                donateService.getSumDonatesForDream(
                        dreamResponseDto.getDonatesIds()));
        return dreamResponseDto;
    }

    @GetMapping("/random")
    @ApiOperation(value = "Return random dream", notes = "Return random dream from DB")
    public DreamResponseDto getDream() {
        // todo:
        //      переробити щоб обирати лише не завершені донати
        //      рбрати з List по id
        long id = (long) (dreamService.getAll().size() * Math.random());
        if (id == 0) {
            return null;
        }
        DreamResponseDto dreamResponseDto = dreamResponseMapper.toDto(dreamService.get(id).get());
        dreamResponseDto.setSumOfDonates(
                donateService.getSumDonatesForDream(
                        dreamResponseDto.getDonatesIds()));
        return dreamResponseDto;
    }

    @PutMapping
    @ApiOperation(value = "Update current dream",
            notes = "Update current dream and return it with id")
    public DreamResponseDto update(
                @RequestBody @ApiParam(name = "dreamRequestDto", value = "Dream object")
                DreamRequestDto dreamRequestDto,
                @RequestParam (name = "id") @ApiParam(name = "id", value = "Dream id") Long id) {
        Dream dream = dreamRequestMapper.toModel(dreamRequestDto);
        dream.setId(id);
        DreamResponseDto dreamResponseDto = dreamResponseMapper.toDto(dreamService.update(dream));
        dreamResponseDto.setSumOfDonates(
                donateService.getSumDonatesForDream(
                        dreamResponseDto.getDonatesIds()));
        return dreamResponseDto;
    }
}
