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
    Long id;
    @OneToOne
    @JoinColumn(name = "user_id")
    User user;
    @OneToOne
    @JoinColumn(name = "dream_type_id")
    DreamType dreamType;
    @OneToMany
    @JoinTable(name = "dreams_categories",
        joinColumns = @JoinColumn(name = "dream_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    List<Category> categories;
    @OneToOne
    @JoinColumn(name = "city_id")
    City city;
    String name;
    String description;
    String filename;
    @Column(name = "mame_type")
    String mameType;
    @Column(name = "image_data")
    byte[] imageData;
    Integer age;
    BigDecimal amount;
    Long likes;
    @Enumerated
    DreamStatus status;
    @Column(name = "d_start")
    LocalDate dateStart;
    @Column(name = "d_end")
    LocalDate dateEnd;

    @Getter
    @AllArgsConstructor
    public enum DreamStatus {
        DONE("Done"),
        PROCESS("Process");

        String name;
    }
}
