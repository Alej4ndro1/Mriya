package team.project.mriya.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Entity
@Table(name = "dreams")
@Data
public class Dream {
    @Id
    @GeneratedValue(generator = "dreams_id_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "dreams_id_seq", sequenceName = "dreams_id_seq", allocationSize = 1)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dream_type_id")
    private DreamType dreamType;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "dreams_categories",
            joinColumns = @JoinColumn(name = "dream_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> categories;
    @ManyToOne(fetch = FetchType.LAZY)
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
    @OneToMany
    private List<Donate> donates;

    @Getter
    @AllArgsConstructor
    public enum DreamStatus {
        DONE("Done"),
        PROCESS("Process");

        private String name;
    }
}
