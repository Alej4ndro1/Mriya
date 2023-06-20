package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class CityResponseDto {
    @ApiModelProperty(notes = "City id", example = "1")
    private Long id;
    @ApiModelProperty(notes = "City name", example = "Kyiv")
    private String name;
}
