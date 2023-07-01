package team.project.mriya.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "categories")
@Data
public class Category {
    @Id
    @GeneratedValue(generator = "categories_id_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "categories_id_seq", sequenceName = "categories_id_seq",
            allocationSize = 1)
    private Long id;
    private String name;
    private Long parentId;
}
