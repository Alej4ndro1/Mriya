package team.project.mriya.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.Category;
import team.project.mriya.model.City;
import team.project.mriya.model.Dream;
import team.project.mriya.model.DreamType;
import team.project.mriya.model.Role;
import team.project.mriya.model.User;
import team.project.mriya.repository.CategoryRepository;
import team.project.mriya.repository.CityRepository;
import team.project.mriya.repository.DreamTypeRepository;
import team.project.mriya.repository.RoleRepository;

@Service
@AllArgsConstructor
public class InjectDataService {
    private static String[] cities = new String[]{"Kyiv", "Lviv", "Dnipro", "Kharkiv", "Odesa",
            "Donetsk", "Zaporizhzhia", "Mykolaiv", "Sevastopol", "Luhansk", "Vinnytsia",
            "Chernihiv", "Kherson", "Poltava", "Khmelnytskyi", "Cherkasy", "Chernivtsi",
            "Zhytomyr", "Lutsk", "Sumy", "Uzhgorod", "Ternopil", "Rivne", "Kropyvnytskyi",
            "Ivano-Frankivsk"};
    private static String[] dreamHolders = new String[]{"Children", "Elderly people",
            "Families of Soldiers", "Animals", "People of disability", "Affected by war"};
    private static String[] typeOfHelp = new String[]{"Transportation help", "Shelter needed",
            "Humanitarian aid", "Ordinary dreams", "House rebuilding", "Medical help", "Nursing",
            "Other"};

    private CategoryRepository categoryRepository;
    private CityRepository cityRepository;
    private DreamTypeRepository dreamTypeRepository;
    private RoleRepository roleRepository;
    private CityService cityService;
    private RoleService roleService;
    private UserService userService;
    private DreamService dreamService;

    private Long createParent(String name) {
        Category category = new Category();
        category.setName(name);
        category = categoryRepository.save(category);
        return category.getId();
    }

    private void createChild(Long parentId, String name) {
        Category category = new Category();
        category.setName(name);
        category.setParentId(parentId);
        categoryRepository.save(category);
    }

    private void createCity(String name) {
        City city = new City();
        city.setName(name);
        cityRepository.save(city);
    }

    private void createDreamType(String name) {
        DreamType dreamType = new DreamType();
        dreamType.setName(name);
        dreamTypeRepository.save(dreamType);
    }

    private void createRole(String name) {
        Role role = new Role();
        role.setName(name);
        roleRepository.save(role);
    }

    private long getRandom(long maxValue) {
        return (long) (Math.random() * maxValue);
    }

    private void createDream(int indexDream) {
        Dream dream = new Dream();
        dream.setUser(userService.getAll().get(0));
        dream.setDreamType(dreamTypeRepository.findById((long) (indexDream % 2) + 1).get());

        List<Category> categoryList = new ArrayList<>();
        List<Category> children = categoryRepository.findAllByParentIdIsNotNull();
        long countCategory = getRandom(3) + 1;
        for (long i = 0; i < countCategory; i++) {
            categoryList.add(children.get((int) getRandom(children.size() - 1)));
        }
        dream.setCategories(categoryList);

        dream.setCity(cityService.get(1 + getRandom(cityService.getAll().size() - 1)).get());
        dream.setName("dream " + indexDream);
        dream.setDescription("Description for " + dream.getName());
        dream.setFilename("");
        dream.setMimeType("");
        dream.setImageData(null);
        dream.setAge((int) getRandom(100) + 1);
        dream.setAmount(BigDecimal.TEN.multiply(BigDecimal.valueOf(getRandom(999) + 1)));
        dream.setLikes(getRandom(1000) + 1);
        dream.setStatus(Dream.DreamStatus.PROCESS);
        dream.setDateStart(LocalDate.of(2023, (int) (getRandom(12) + 1),
                (int) (getRandom(27) + 1)));
        dream.setDateEnd(null);
        dream.setDonates(null);

        dreamService.add(dream);
    }

    public void injectCategories() {
        Long id = createParent("Dream holders");
        for (String holder : dreamHolders) {
            createChild(id, holder);
        }
        id = createParent("Type of help");
        for (String help : typeOfHelp) {
            createChild(id, help);
        }
    }

    public void injectCities() {
        for (String city : cities) {
            createCity(city);
        }
    }

    public void injectDreamTypes() {
        createDreamType("Donate");
        createDreamType("Help non-financially");
    }

    public void injectRoles() {
        createRole("USER");
        createRole("ADMIN");
        createRole("MODERATOR");
        createRole("GUEST");
    }

    public void injectUsers() {
        User user = new User();
        user.setEmail("user@server.com");
        user.setPib("Oksana Petrivna Shevchenko");
        user.setCity(cityService.get(15L).get());
        user.setPhone("0542578654");
        user.setDateRegistration(LocalDate.now());
        user.setBirthday(LocalDate.of(1986, 10, 15));
        user.setRole(roleService.get(2L).get());
        user.setPassword("password");
        userService.add(user);
    }

    public void injectDreams(int n) {
        for (int i = 0; i < n; i++) {
            createDream(i);
        }
    }
}
