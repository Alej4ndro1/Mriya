package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class CityRequestDto {
    @ApiModelProperty(notes = "City name", example = "Kyiv")
    private String name;
}
