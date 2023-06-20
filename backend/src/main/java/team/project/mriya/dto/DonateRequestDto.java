package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
public class DonateRequestDto {
    @ApiModelProperty(notes = "Dream id", example = "1")
    private Long dreamId;
    @ApiModelProperty(notes = "Donater id", example = "1")
    private Long userId;
    @ApiModelProperty(notes = "Sum of donate", example = "250.00")
    private BigDecimal sum;
    @ApiModelProperty(notes = "Date donate", example = "01.05.2023")
    private LocalDate datePay;
}
