package team.project.mriya.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "cities")
@Data
public class City {
    @Id
    @GeneratedValue(generator = "cities_id_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "cities_id_seq", sequenceName = "cities_id_seq",
            allocationSize = 1)
    private Long id;
    private String name;
}
