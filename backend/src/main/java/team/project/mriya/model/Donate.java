package team.project.mriya.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "donates")
@Data
public class Donate {
    @Id
    @GeneratedValue(generator = "donates_id_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "donates_id_seq", sequenceName = "donate_id_seq", allocationSize = 1)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private BigDecimal sum;
    @Column(name = "d_pay")
    private LocalDate datePay;
}
