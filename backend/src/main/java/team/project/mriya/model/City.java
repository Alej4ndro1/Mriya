package team.project.mriya.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "cities")
@Data
public class City {
    @Id
    private Long id;
    private String name;
}
