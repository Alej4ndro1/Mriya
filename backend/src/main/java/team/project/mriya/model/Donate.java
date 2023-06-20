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
    private Long id;
    @OneToOne
    @JoinColumn(name = "dream_id")
    private Dream dream;
    @OneToMany
    @JoinTable(name = "donates_users",
        joinColumns = @JoinColumn(name = "donate_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users;
    private BigDecimal sum;
    @Column(name = "d_pay")
    private LocalDate datePay;
}
