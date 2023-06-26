package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class DonateRequestDto {
    @ApiModelProperty(notes = "Donater id", example = "1")
    private Long userId;
    @ApiModelProperty(notes = "Sum of donate", example = "250.00")
    private BigDecimal sum;
    @ApiModelProperty(notes = "Date donate", example = "01.05.2023")
    private LocalDate datePay;
}
