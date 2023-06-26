package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class DreamTypeRequestDto {
    @ApiModelProperty(notes = "Dream type name", example = "Volunteer")
    private String name;
}
