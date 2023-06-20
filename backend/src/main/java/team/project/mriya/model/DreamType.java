package team.project.mriya.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "dreams_types")
@Data
public class DreamType {
    @Id
    private Long id;
    private String name;
}
