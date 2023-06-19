package team.project.mriya.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "donates")
@Data
public class Donate {
    @Id
    Long id;
    @OneToOne
    @JoinColumn(name = "dream_id")
    Dream dream;
    @OneToMany
    @JoinTable(name = "donates_users",
        joinColumns = @JoinColumn(name = "donate_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    List<User> users;
    BigDecimal sum;
    @Column(name = "d_pay")
    LocalDate datePay;
}
