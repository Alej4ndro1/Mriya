package team.project.mriya.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Entity
@Table(name = "dreams")
@Data
public class Dream {
    @Id
    private Long id;
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToOne
    @JoinColumn(name = "dream_type_id")
    private DreamType dreamType;
    @OneToMany
    @JoinTable(name = "dreams_categories",
        joinColumns = @JoinColumn(name = "dream_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> categories;
    @OneToOne
    @JoinColumn(name = "city_id")
    private City city;
    private String name;
    private String description;
    private String filename;
    @Column(name = "mame_type")
    private String mameType;
    @Column(name = "image_data")
    private byte[] imageData;
    private Integer age;
    private BigDecimal amount;
    private Long likes;
    @Enumerated
    private DreamStatus status;
    @Column(name = "d_start")
    private LocalDate dateStart;
    @Column(name = "d_end")
    private LocalDate dateEnd;

    @Getter
    @AllArgsConstructor
    public enum DreamStatus {
        DONE("Done"),
        PROCESS("Process");

        String name;
    }
}
