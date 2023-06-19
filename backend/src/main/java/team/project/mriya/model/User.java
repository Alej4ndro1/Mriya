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
    Long id;
    @OneToOne
    @JoinColumn(name = "role_id")
    Role role;
    String email;
    String password;
    String pib;
    LocalDate birthday;
    String phone;
    @Column(name = "d_reg")
    LocalDate dateRegistration;
    @Column(name = "d_close")
    LocalDate dateClose;
    @OneToOne
    @JoinColumn(name = "city_id")
    City city;
}
