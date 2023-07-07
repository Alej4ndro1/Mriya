package team.project.mriya.dto;

import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import lombok.Data;

@Data
public class UserResponseDto {
    @ApiModelProperty(notes = "User id", example = "1")
    private Long id;
    @ApiModelProperty(notes = "Role id", example = "1")
    private Long roleId;
    @ApiModelProperty(notes = "User email", example = "user@server.com")
    private String email;
    @ApiModelProperty(notes = "PIB of user", example = "Oleg Mykolayovych Kovalenko")
    private String pib;
    @ApiModelProperty(notes = "User birthday", example = "18.05.1985")
    private LocalDate birthday;
    @ApiModelProperty(notes = "Phone number", example = "0551112233")
    private String phone;
    @ApiModelProperty(notes = "Date register user", example = "01.06.2023")
    private LocalDate dateRegistration;
    @ApiModelProperty(notes = "Date close user", example = "01.12.2023")
    private LocalDate dateClose;
    @ApiModelProperty(notes = "City id", example = "1")
    private Long cityId;
}
