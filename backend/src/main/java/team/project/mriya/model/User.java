package team.project.mriya.model;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    private Long id;
    @OneToOne
    @JoinColumn(name = "role_id")
    private Role role;
    private String email;
    private String password;
    private String pib;
    private LocalDate birthday;
    private String phone;
    @Column(name = "d_reg")
    private LocalDate dateRegistration;
    @Column(name = "d_close")
    private LocalDate dateClose;
    @OneToOne
    @JoinColumn(name = "city_id")
    private City city;
}
