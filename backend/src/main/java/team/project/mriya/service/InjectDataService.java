package team.project.mriya.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import team.project.mriya.model.Category;
import team.project.mriya.model.City;
import team.project.mriya.model.DreamType;
import team.project.mriya.model.Role;
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
}
