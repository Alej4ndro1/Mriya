package team.project.mriya.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.project.mriya.model.Category;
import team.project.mriya.model.City;
import team.project.mriya.model.DreamType;
import team.project.mriya.model.Role;
import team.project.mriya.repository.RoleRepository;
import team.project.mriya.service.CategoryService;
import team.project.mriya.service.CityService;
import team.project.mriya.service.DreamTypeService;
import team.project.mriya.service.InjectDataService;

@RestController
@RequestMapping("/api/inject-data")
@AllArgsConstructor
public class InjectData {
    private InjectDataService injectDataService;
    private CityService cityService;
    private DreamTypeService dreamTypeService;
    private CategoryService categoryService;
    private RoleRepository roleRepository;

    @GetMapping("/status-of-dictionaries")
    public String hello() {
        List<City> cities = cityService.getAll();
        List<DreamType> dreamTypes = dreamTypeService.getAll();
        List<Category> categories = categoryService.getAll();
        List<Role> roles = roleRepository.findAll();

        return cities.toString() + " <br> "
                + dreamTypes.toString() + " <br> "
                + categories.toString() + " <br> "
                + roles.toString();
    }

    @PostMapping("/dictionaries")
    public void insertDictionaries() {
        injectDataService.injectCategories();
        injectDataService.injectCities();
        injectDataService.injectDreamTypes();
        injectDataService.injectRoles();
    }
}
