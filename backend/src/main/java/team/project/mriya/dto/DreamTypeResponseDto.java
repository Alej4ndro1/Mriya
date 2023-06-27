package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class DreamTypeResponseDto {
    @ApiModelProperty(notes = "Dream type id", example = "1")
    private Long id;
    @ApiModelProperty(notes = "Dream type name", example = "Volunteer")
    private String name;
}
