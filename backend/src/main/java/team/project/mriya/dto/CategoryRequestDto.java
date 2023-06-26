package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class CategoryRequestDto {
    @ApiModelProperty(notes = "Category name", example = "City")
    private String name;
    @ApiModelProperty(notes = "Id parent of category", example = "1 or null")
    private Long parentId;
}
