package team.project.mriya.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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

    @PostMapping("/inject")
    @ApiOperation(value = "Inject data to project",
            notes = "Inject test data to DB, need enter count dream card")
    public void insertDictionaries(@RequestParam(name = "count")
                                   @ApiParam(name = "count", value = "Count dreams") int count) {
        injectDataService.injectCategories();
        injectDataService.injectCities();
        injectDataService.injectDreamTypes();
        injectDataService.injectRoles();
        injectDataService.injectUsers();
        injectDataService.injectDreams(count);
    }
}
