package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import lombok.Data;

@Data
public class DreamResponseDto {
    @ApiModelProperty(notes = "Dream id", example = "1")
    private Long id;
    @ApiModelProperty(notes = "User id", example = "1")
    private Long userId;
    @ApiModelProperty(notes = "Dream type id", example = "1")
    private Long dreamTypeId;
    @ApiModelProperty(notes = "List id of categories", example = "[1, 2, 4, 5]")
    private List<Long> categoryIds;
    @ApiModelProperty(notes = "City id", example = "1")
    private Long cityId;
    @ApiModelProperty(notes = "Name person or title", example = "My dog")
    private String name;
    @ApiModelProperty(notes = "Description of dream", example = "My dream for my dog...")
    private String description;

    @ApiModelProperty(notes = "Name file", example = "picture.jpg")
    private String filename;
    @ApiModelProperty(notes = "Mime type of image", example = "image/jpeg")
    private String mimeType;
    @ApiModelProperty(notes = "Image", example = "")
    private byte[] imageData;

    @ApiModelProperty(notes = "Age person or animal", example = "12")
    private Integer age;
    @ApiModelProperty(notes = "Total amount for dream", example = "150.00")
    private BigDecimal amount;
    @ApiModelProperty(notes = "Count of likes", example = "10")
    private Long likes;
    @ApiModelProperty(notes = "Status dream: Done or Process")
    private String statusName;
    @ApiModelProperty(notes = "Date posted of dream", example = "15.05.2023")
    private LocalDate dateStart;
    @ApiModelProperty(notes = "Collection end date", example = "30.06.2023")
    private LocalDate dateEnd;
    @ApiModelProperty(notes = "List id of donates", example = "[1, 2, 4, 5]")
    private List<Long> donatesIds;
    @ApiModelProperty(notes = "Sum of donates", example = "125.35")
    private BigDecimal sumOfDonates;
}
