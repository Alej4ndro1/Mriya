package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class CategoryResponseDto {
    @ApiModelProperty(notes = "Category id", example = "1")
    private Long id;
    @ApiModelProperty(notes = "Category name", example = "City")
    private String name;
    @ApiModelProperty(notes = "Id parent of category", example = "1 or null")
    private Long parentId;
}
