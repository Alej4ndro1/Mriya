package team.project.mriya.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "donates")
@Data
public class Donate {
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "dream_id")
    private Dream dream;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private BigDecimal sum;
    @Column(name = "d_pay")
    private LocalDate datePay;
}
